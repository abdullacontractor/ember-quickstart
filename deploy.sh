#! /bin/bash

echo "===== Beginning deploy"

rm -rf dist
ember build --environment=production
mv dist/index.html dist/200.html
surge dist https://abdullas-ember-playground.surge.sh

echo "===== Finished deploy"
