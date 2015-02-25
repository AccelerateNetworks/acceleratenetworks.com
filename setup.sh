#!/bin/bash

# NPM
#
# If `npm install` fails then something went wrong so we should first just
# clean our cache and try reinstalling. If that fails too, then let's try
# and remove our `node_modules` folder and reinstall again. If something
# is still broke after that then we should ssh in and figure it out.

echo "--> NPM"
npm install || npm cache clean && npm install || rm -rf node_modules && npm install
echo "######################################################"

# Bower
#
# If `bower update` fails then something went wrong so we should first try
# and clean our cache and try re-updating. If something is still broken
# after that then we should ssh in and figure it out.

echo "--> BOWER"
bower update || bower cache clean && bower update
echo "######################################################"

# Gulp
#
# Lastly we're going to compile our assets. We're going to run gulp twice
# here because every once in a while gulp derps but running it a second
# time always makes sure it's fixed. If styles still dont' update then
# we should ssh in and figure it out.

echo "--> GULP"
gulp && gulp
echo "######################################################"
