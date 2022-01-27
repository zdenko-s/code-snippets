# Create a new GMSA
New-ADServiceAccount `
	-Name 'cc365_Ta01' `
	-DNSHostName 'cc365Ta01.dev365.corp'
	
New-ADServiceAccount -DNSHostName gcc365Ta01.dev365.corp -Name gcc365Ta01 -DisplayName 'gMSA cc365Ta01.dev365.corp'  -PrincipalsAllowedToRetrieveManagedPassword @('zdenko.sadojevic');

Import-Module .\DSInternals_v4.7\DSInternals\DSInternals.psd1;

$username = 'gcc365Ta01';
$gmsa = Get-ADServiceAccount -Identity $username -Properties 'msDS-ManagedPassword';
$mp = $gmsa.'msDS-ManagedPassword';

$mpstruct = ConvertFrom-ADManagedPasswordBlob $mp;

$password = $mpstruct.CurrentPassword;
#$securePassword = ConvertTo-SecureString $password -AsPlainText -Force

$securePassword = $mpstruct.SecureCurrentPassword;
$credential = New-Object System.Management.Automation.PSCredential $username, $securePassword
Start-Process Notepad.exe -Credential $credential
