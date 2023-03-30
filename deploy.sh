#!/bin/bash
cd /home/ubuntu/book-review
git pull
yarn install && yarn build
pm2 restart front