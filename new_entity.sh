#!/bin/sh

touch ./controllers/$1.js ./dao/$1.js ./models/$1.js ./routes/$1.js
echo "make sure you update ./models/index.js"