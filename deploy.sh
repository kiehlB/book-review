#!/bin/bash
cd /home/ubuntu/newclient 
git pull
yarn install && yarn build
pm2 restart next