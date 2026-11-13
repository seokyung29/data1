@echo off
chcp 65001 > nul
echo ===================================================
echo  가상기업 3개사 5개년 매출 통계 분석 대시보드 실행
echo ===================================================

:: 1. Microsoft Edge로 실행 시도
start msedge "%~dp0index.html" 2>nul
if %ERRORLEVEL% equ 0 exit

:: 2. Chrome으로 실행 시도
start chrome "%~dp0index.html" 2>nul
if %ERRORLEVEL% equ 0 exit

:: 3. 기본 브라우저로 실행
start "" "%~dp0index.html"
exit
