vagrant up win
vagrant winrm win -c ". C:\\vagrant\\run-tests.bat | Write-Output"
vagrant halt win
