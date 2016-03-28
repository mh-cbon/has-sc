rm ./mocha-*.log
vagrant up win
vagrant winrm win -c "C:\\vagrant\\run-tests.ps1"
vagrant halt win
