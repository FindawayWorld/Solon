#! /bin/bash

APPNAME=""

# update sources
echo "Update Sources"
sudo apt-get update

# install apache2
echo "Install Apache, php5, and mod-php5"
sudo apt-get -y install apache2 libapache2-mod-php5 php5 build-essential curl

echo "Install php mods"
sudo apt-get -y install php5-mysql php5-curl php5-gd php5-intl php-pear php5-imagick php5-imap php5-mcrypt php5-memcache php5-ming php5-ps php5-pspell php5-recode php5-sqlite php5-tidy php5-xmlrpc php5-xsl php5-xdebug

echo "Enable PHP Mcrypt"
php5enmod mcrypt

echo "Copy macros"
sudo cp /vagrant/files/macros.conf /etc/apache2/conf-available/macros.conf

echo "Copy xdebug.ini"
sudo cp /vagrant/files/xdebug.ini /etc/php5/mods-available/xdebug.ini

echo "enable apache modules"
sudo a2enmod rewrite deflate headers php5 macro ssl

echo "disable apache default site"
sudo a2dissite 000-default

echo "Enable macros config"
sudo a2enconf macros

echo "reload apache"
sudo service apache2 reload

# Add and enable site
echo "Copy site config"
sudo cp /vagrant/files/vhost.conf /etc/apache2/sites-available/$APPNAME.conf

echo "enable site"
sudo a2ensite $APPNAME

echo "Reload apache"
sudo service apache2 reload
