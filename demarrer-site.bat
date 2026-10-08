@echo off
setlocal
cd /d "%~dp0"

where py >nul 2>nul
if not errorlevel 1 (
  start "" http://127.0.0.1:8000/index.html
  py -m http.server 8000
  goto :eof
)

where python >nul 2>nul
if not errorlevel 1 (
  start "" http://127.0.0.1:8000/index.html
  python -m http.server 8000
  goto :eof
)

echo Python n'est pas installe ou introuvable.
echo Installez Python, puis relancez ce fichier.
pause
