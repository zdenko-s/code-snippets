#include <windows.h>

#include <iostream>
#include <stdio.h>

int APIENTRY WinMain (HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
#ifdef _DEBUG
	AllocConsole();
	freopen("CONOUT$", "w", stdout);
	std::cout << "Start WinMain" << std::endl;
#endif
	_Module.Init (NULL, hInstance);

	CDlg dlg;
	dlg.DoModal();
#ifdef _DEBUG
	FreeConsole();
#endif // _DEBUG

	return 0;
}
