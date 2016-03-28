# -*- mode: ruby -*-
# vi: set ft=ruby :

# box name into env var, same script can be used with different boxes. Defaults to win7-ie11.
box_name = box_name = ENV['box_name'] != nil ? ENV['box_name'].strip : 'win7-ie11'
# box repo into env var, so private repos/cache can be used. Defaults to http://aka.ms
box_repo = ENV['box_repo'] != nil ? ENV['box_repo'].strip : 'http://aka.ms'

Vagrant.configure("2") do |config|

  config.vm.define :win do |win|
    # If the box is win7-ie11, the convention for the box name is modern.ie/win7-ie11
    # win.vm.box = "modern.ie/" + box_name
    # If the box is win7-ie11, the convention for the box url is http://aka.ms/vagrant-win7-ie11
    # win.vm.box_url = box_repo + "/vagrant-" + box_name

    win.vm.box = "opentable/win-2012r2-standard-amd64-nocm"

    # big timeout since windows boot is very slow
    win.vm.boot_timeout = 500

    # on fedora-like, you must use the downloadable package available on hashi corp website,
    # the per distrib provided package wont provide winrm support..
    # see https://www.vagrantup.com/downloads.html

    # rdp forward

    # winrm config, uses modern.ie default user/password. If other credentials are used must be changed here
    win.vm.communicator = :winrm
    # win.winrm.username = "IEUser"
    # win.winrm.password = "Passw0rd!"

    win.vm.provider "virtualbox" do |vb|
      # first setup requires gui to be enabled so scripts can be executed in virtualbox guest screen
      #vb.gui = true
      vb.customize ["modifyvm", :id, "--memory", "1024"]
      vb.customize ["modifyvm", :id, "--vram", "128"]
      vb.customize ["modifyvm", :id,  "--cpus", "1"]
      vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
      vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
      vb.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 10000]
    end

    config.vm.provision "shell", path: "node-setup.ps1"

  end

  config.vm.define "fedora" do |fedora|
    fedora.vm.box = "fedora/23-cloud-base"

    fedora.vm.hostname = "fedora.vagrant.dev"
    fedora.vm.network "private_network", type: :dhcp
  end

end
