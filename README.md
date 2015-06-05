Gateway
=======
Front-end boilerplate/starter kit.

http://findaway-front-end-dev-standards.s3-website-us-east-1.amazonaws.com/gateway.html

## Requirements


- node
    + npm
    + [Grunt](http://gruntjs.com) `$ npm i -g grunt-cli`
    + [Bower](http://bower.io) `$ npm i -g bower`
- Ruby
    + [Sass](http://sass-lang.com) `$ gem install sass`
- Virtualbox ***(optional)***
- Vagrant >= v1.5 ***(optional)***
- Hosts file entry for `127.0.0.1 gateway.dev` ***(optional)***

## Running locally

_Make sure you change any reference to `gateway.dev` to your local domain._

```bash
# install local node dependencies
$ npm install

# install front-end components
$ bower install

# Start vagrant
$ vagrant up

# after provisioning server should now be running @ http://gateway.dev:8280
```

## Build Front End components
```bash
# SCSS for development
$ grunt sass:dev

# SCSS, JS watch + live reload
$ grunt watch
```

## Build production files
```bash
# Generate folders and file for release
$ grunt build

# This will build CSS and javascript, and copy all files into the 'dist' folder.
# The 'dist' folder contents can be uploaded to the server and placed in their
# corresponding locations.
```
