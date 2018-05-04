#!/bin/bash

if [ $# -lt 2 ]; then
  echo '引数が足りません'
  exit 1
fi

tmpdir=`mktemp -d`

for dir in ${@:2}; do
  cd $dir
  npm i
  npm run build
  mv build $tmpdir/$dir
  cd ..
done

git checkout gh-pages
git clean -df
git rm -rq --ignore-unmatch ${@:2}
mv $tmpdir/* .
git add -A
git commit -m $1

