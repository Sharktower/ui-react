#!/bin/bash

cp -r ./src/ ./dist/es/
find ./dist/es -name *.story* -delete
find ./dist/es -name *.test* -delete
