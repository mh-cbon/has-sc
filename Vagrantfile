# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.define :win do |win|

    win.vm.box = "opentable/win-2012r2-standard-amd64-nocm"

    # big timeout since windows boot is very slow
    win.vm.boot_timeout = 500

    # on fedora-like, you must use the downloadable package available on hashi corp website,
    # the per distrib provided package wont provide winrm support..
    # see https://www.vagrantup.com/downloads.html

    # rdp forward
    config.vm.network :forwarded_port, guest: 3389, host: 33891, id: "rdp", auto_correct:true

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

    config.vm.provision "shell", inline: ". C:\\vagrant\\node-setup.bat | Write-Output"

  end

  config.vm.define "fedora" do |fedora|
    fedora.vm.box = "fedora/23-cloud-base"

    fedora.vm.hostname = "fedora.vagrant.dev"
    fedora.vm.network "private_network", type: :dhcp
  end

end
