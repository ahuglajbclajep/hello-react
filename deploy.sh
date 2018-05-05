#!/bin/bash

if [ $# -lt 2 ]; then
  echo '引数が足りません'
  exit 1
fi

for dir in ${@:2}; do
  cd $dir
  npm run build
  cd ..
done

if [ `git branch --list gh-pages` ]; then
  git checkout gh-pages
  git rm -rq --ignore-unmatch ${@:2}
else
  git checkout --orphan gh-pages
  git rm -rfq .
  echo 'node_modules' > .gitignore
fi

for dir in ${@:2}; do
  mv $dir/build/* $dir
done
git add -A
git commit -m "$1"
