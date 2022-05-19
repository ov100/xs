function invalid() {
    let token = localStorage.getItem("token");
    return token && token === getKey();
}

function check(token) {
    let key = encode(token);

    if (key === getKey()) {
        localStorage.setItem("token", key);
        return true;
    }
    return false;
}

function getKey() {
    let str = new Date().getFullYear();
    for (let i = 0; i < 3; i++) {
        str += '6';
    }
    return encode(str);
}

let s1 = CryptoJS.enc.Latin1.parse('626f6f6b52656164');
let s2 = CryptoJS.enc.Latin1.parse('626f6f6b49763030');

function encode(data) {
    let encode = CryptoJS.AES.encrypt(data, s1, {
        iv: s2,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return encode.toString();
}

function decode(data) {
    let content = CryptoJS.AES.decrypt(data, s1, {iv: s2, padding: CryptoJS.pad.ZeroPadding});
    return content.toString(CryptoJS.enc.Utf8);
}