$env:GIT_ASKPASS = "echo"
$env:GHP_TOKEN = "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"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
& "C:\Program Files\Git\bin\git.exe" add .
& "C:\Program Files\Git\bin\git.exe" commit -m "Update Gift Finder with Amazon affiliate links"
& "C:\Program Files\Git\bin\git.exe" push origin master