Param(
    [Parameter(Mandatory=$true)]
    [string]$TenantId,
    [Parameter(Mandatory=$true)]
    [string]$CctrVersion = '10.0.2301.1'
    )
Set-Location $PSScriptRoot
Write-Host "TenantId=$TenantId"
Write-Host "Version=$CctrVersion"
