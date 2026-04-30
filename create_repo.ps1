$env:GHP_TOKEN = "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"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$body = @{
    name = "drawgifts"
    description = "Secret Santa Generator for India - Free & Open Source"
    private = $false
    auto_init = $false
} | ConvertTo-Json

$headers = @{
    "Authorization" = "token $env:GHP_TOKEN"
    "Accept" = "application/vnd.github.v3+json"
    "Content-Type" = "application/json"
}

$response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method POST -Headers $headers -Body $body
Write-Host "Created: $($response.html_url)"