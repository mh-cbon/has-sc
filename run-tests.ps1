Start-Process -FilePath "C:\\nodejs\\npm.cmd" -ArgumentList "-i" -WorkingDirectory "C:\\vagrant\\"
Start-Process -FilePath "C:\\Users\\vagrant\\AppData\\Roaming\\npm\\mocha.cmd" -ArgumentList "test\\windows.js" -WorkingDirectory "C:\\vagrant\\" -RedirectStandardError "C:\\vagrant\\mocha-stderr.log" -RedirectStandardOutput "C:\\vagrant\\mocha-stdout.log"
