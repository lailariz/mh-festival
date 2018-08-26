#!/bin/sh

npm run build
cd ~/personal/repos/mh-festival
mkdir ~/tmp_build
mv -v ~/personal/repos/mh-festival/build/* ~/tmp_build
git checkout gh-pages
rm -rf static
mv ~/tmp_build/* .
rm -rf ~/tmp_build
git add .
git commit -m "Site updated -- deploying new version"
git push origin gh-pages
git checkout master

