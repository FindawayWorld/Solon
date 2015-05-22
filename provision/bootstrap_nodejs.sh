#! /bin/bash

APPNAME="gateway.dev"

# update sources
echo "Update Sources"
sudo apt-get update

# install apache2
echo "Install Essentals"
sudo apt-get install -y curl build-essential libssl-dev software-properties-common python g++ make

echo "Install nodejs"
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install -y nodejs

echo "Install PM2"
sudo npm install pm2 -g

echo "Start Application"
cd /var/www/$APPNAME && pm2 start app.js

echo "Setup PM2 to start on boot"
pm2 startup ubuntu
