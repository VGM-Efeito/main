@echo off
REM Script para executar testes do Playwright.dev

if "%1"=="" (
    echo Uso: run-playwright-dev.bat [opcao]
    echo.
    echo Opcoes:
    echo   test              - Executar testes
    echo   test:headed       - Executar com navegador visivel
    echo   test:debug        - Executar em modo debug
    echo   report            - Mostrar relatorio HTML
    echo   help              - Mostrar esta mensagem
    echo.
    goto end
)

if "%1"=="test" (
    echo Executando testes do Playwright.dev...
    npx playwright test tests/e2e/playwright-dev.spec.ts
    goto end
)

if "%1"=="test:headed" (
    echo Executando testes com navegador visivel...
    npx playwright test tests/e2e/playwright-dev.spec.ts --headed
    goto end
)

if "%1"=="test:debug" (
    echo Executando testes em modo debug...
    npx playwright test tests/e2e/playwright-dev.spec.ts --debug
    goto end
)

if "%1"=="report" (
    echo Abrindo relatorio HTML...
    npx playwright show-report
    goto end
)

if "%1"=="help" (
    echo Uso: run-playwright-dev.bat [opcao]
    echo.
    echo Opcoes:
    echo   test              - Executar testes
    echo   test:headed       - Executar com navegador visivel
    echo   test:debug        - Executar em modo debug
    echo   report            - Mostrar relatorio HTML
    echo   help              - Mostrar esta mensagem
    goto end
)

echo Opcao desconhecida: %1
echo Use 'run-playwright-dev.bat help' para ver opcoes validas

:end
