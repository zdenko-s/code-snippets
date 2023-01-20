#include<Windows.h>
#include <winuser.h>
#include <iostream>

int main(int argc, char** argv)
{
	if (argc > 1)
	{
		char some[256];
		strcpy_s(some, "Text to copy to clipboard.");
		OpenClipboard(GetDesktopWindow());
		EmptyClipboard();
		HGLOBAL hg = GlobalAlloc(GMEM_MOVEABLE, ARRAYSIZE(some));
		if (!hg)
		{
			CloseClipboard();
			return 1;
		}
		memcpy(GlobalLock(hg), some, ARRAYSIZE(some));
		GlobalUnlock(hg);
		SetClipboardData(CF_TEXT, hg);
		CloseClipboard();
		GlobalFree(hg);
	}
	else
	{
		std::cout << "Clipboard text content:\n";
		if (!IsClipboardFormatAvailable(CF_TEXT))
			return 1;

		if (!OpenClipboard(GetDesktopWindow()))
			return 2;

		HGLOBAL hg = GetClipboardData(CF_TEXT);
		if (hg)
		{
			LPCSTR strData = (LPCSTR)GlobalLock(hg);
			if (strData)
			{
				std::cout << strData;
				GlobalUnlock(hg);
			}
		}
		CloseClipboard();
	}
	return 0;
}
