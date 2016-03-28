Invoke-WebRequest -Uri "https://nodejs.org/dist/v5.9.1/node-v5.9.1-x64.msi" -OutFile "C:\node.msi"
msiexec.exe /i C:\node.msi INSTALLDIR="C:\nodejs" /quiet
Start-Process -FilePath "C:\nodejs\node.exe" -ArgumentList "-v"
Start-Process -FilePath "C:\nodejs\npm" -ArgumentList "-i mocha -g"
