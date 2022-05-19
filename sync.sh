#/bin/bash
rm -rf css js views index.html login.html
cp -rf /Users/gaobo/develop/work_my/priv_b/book-web/static_new/* .
git init
git add -A
git commit -m 'deploy'

git push
