#!/usr/bin/env pwsh

<#
.SYNOPSIS
    Script para executar testes de automação do Playwright.dev

.DESCRIPTION
    Este script facilita a execução dos testes do Playwright.dev com diferentes opcoes

.PARAMETER Action
    A acao a executar:
    - test (padrão): Executar testes
    - test:headed: Executar com navegador visivel
    - test:debug: Executar em modo debug
    - report: Mostrar relatorio HTML
    - help: Mostrar ajuda

.EXAMPLE
    .\run-playwright-dev.ps1 test
    .\run-playwright-dev.ps1 test:headed
    .\run-playwright-dev.ps1 report
#>

param(
    [Parameter(Position = 0)]
    [ValidateSet("test", "test:headed", "test:debug", "report", "help")]
    [string]$Action = "help"
)

function Show-Help {
    Write-Host "`nAutomacao Playwright.dev - Script de Execucao`n" -ForegroundColor Cyan
    Write-Host "Uso:" -ForegroundColor Green
    Write-Host "  .\run-playwright-dev.ps1 [acao]`n"
    Write-Host "Acoes disponíveis:" -ForegroundColor Green
    Write-Host "  test              - Executar testes"
    Write-Host "  test:headed       - Executar com navegador visivel"
    Write-Host "  test:debug        - Executar em modo debug"
    Write-Host "  report            - Mostrar relatorio HTML"
    Write-Host "  help              - Mostrar esta mensagem`n"
    Write-Host "Exemplos:" -ForegroundColor Green
    Write-Host "  .\run-playwright-dev.ps1 test"
    Write-Host "  .\run-playwright-dev.ps1 test:headed"
    Write-Host "  .\run-playwright-dev.ps1 report`n"
}

function Run-Tests {
    param(
        [string]$Options = ""
    )
    Write-Host "Executando testes do Playwright.dev..." -ForegroundColor Cyan
    Write-Host "Comando: npx playwright test tests/e2e/playwright-dev.spec.ts $Options" -ForegroundColor Gray
    Write-Host ""
    
    & npx playwright test tests/e2e/playwright-dev.spec.ts $Options
}

function Show-Report {
    Write-Host "Abrindo relatorio HTML..." -ForegroundColor Cyan
    Write-Host ""
    & npx playwright show-report
}

# Executar acao selecionada
switch ($Action) {
    "test" {
        Run-Tests
        break
    }
    "test:headed" {
        Run-Tests "--headed"
        break
    }
    "test:debug" {
        Run-Tests "--debug"
        break
    }
    "report" {
        Show-Report
        break
    }
    "help" {
        Show-Help
        break
    }
    default {
        Write-Host "Acao desconhecida: $Action" -ForegroundColor Red
        Show-Help
    }
}
