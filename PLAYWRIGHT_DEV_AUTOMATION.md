# Automação Playwright.dev

Este projeto contém testes de automação E2E para o site https://playwright.dev/

## Arquivos Criados

### 1. **PlaywrightPage.ts**
Classe Page Object que encapsula a interação com o site Playwright.dev

**Métodos principais:**
- `navigateTo()`: Navega para https://playwright.dev/
- `clickGetStarted()`: Clica no botão "Get Started"
- `isGetStartedButtonVisible()`: Verifica se o botão está visível
- `getCurrentUrl()`: Retorna a URL atual
- `getPageTitle()`: Retorna o título da página
- `waitForPageLoad()`: Aguarda o carregamento da página

### 2. **playwright-dev.spec.ts**
Suite de testes com 3 cenários:

1. **should navigate to Playwright.dev and click Get Started button**
   - Navega para o site
   - Verifica se a página carregou
   - Valida se o botão "Get Started" está visível
   - Clica no botão
   - Verifica a navegação para a página de documentação

2. **should verify Playwright homepage is accessible**
   - Valida o acesso à homepage
   - Verifica o título e URL da página

3. **should click Get Started and verify navigation**
   - Tira screenshot antes de clicar
   - Clica no botão "Get Started"
   - Tira screenshot após o clique
   - Verifica mudança de URL

## Como Executar

### Instalar dependências
```bash
npm install
```

### Executar todos os testes
```bash
npm test
```

### Executar apenas os testes do Playwright.dev
```bash
npx playwright test tests/e2e/playwright-dev.spec.ts
```

### Executar em modo headed (com navegador visível)
```bash
npx playwright test tests/e2e/playwright-dev.spec.ts --headed
```

### Executar com modo debug
```bash
npx playwright test tests/e2e/playwright-dev.spec.ts --debug
```

### Ver relatório HTML
```bash
npx playwright show-report
```

## Locators Utilizados

O teste utiliza o seguinte locator para encontrar o botão "Get Started":
```typescript
this.page.locator('a:has-text("Get started")').first()
```

Este locator:
- Busca por tags `<a>` que contenham o texto "Get started"
- Seleciona o primeiro match
- É case-insensitive por padrão

## Screenshots

Os testes geram screenshots nos arquivos:
- `before-click.png`: Página antes de clicar em "Get Started"
- `after-click.png`: Página após clicar em "Get Started"

## Configuração do Playwright

A configuração está em `playwright.config.ts` com:
- Timeout padrão: 30 segundos
- Modo headless por padrão
- Reporter HTML para visualização dos resultados
- Trace gravada em caso de falha

## Estrutura do Projeto

```
src/pages/PlaywrightPage.ts       # Page Object
tests/e2e/playwright-dev.spec.ts  # Testes
```
