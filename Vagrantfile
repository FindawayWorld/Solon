# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

    # ! Requires vagrant-ommibus plugin !
    # Optional vagrant-vbguest plugin

    config.vm.box = "WebHost1(14.04)"
    config.vm.box_url = "http://opscode-vm-bento.s3.amazonaws.com/vagrant/virtualbox/opscode_ubuntu-14.04_chef-provisionerless.box"

    config.ssh.forward_agent = true

    config.vm.network :forwarded_port, guest: 80,   host: 8280
    config.vm.network :forwarded_port, guest: 443,   host: 8243
    config.vm.network :forwarded_port, guest: 3306, host: 8233
    config.vm.synced_folder "src/", "/var/www/gateway.dev"

    config.vm.hostname = "gateway.dev"

    config.vm.provider "virtualbox" do |v|
        v.memory = 1024
        v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end

    config.vm.provision "shell", path: "provision/bootstrap.sh"

end
