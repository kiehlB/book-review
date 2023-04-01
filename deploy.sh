#!/bin/bash
cd /home/ubuntu/book-review
git pull
yarn install
pm2 restart front