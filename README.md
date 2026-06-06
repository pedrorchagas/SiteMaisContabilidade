# Mais Contabilidade - Landing Page

Uma landing page profissional, moderna e otimizada para SEO desenvolvida para a Mais Contabilidade.

## 📋 Sobre o Projeto

Landing page completa com:
- **3 Páginas:** Home (Serviços), Sobre (História), Contato (Localização + Formulário)
- **Design Moderno:** Cores verde claro, verde escuro e branco
- **Responsivo:** Funciona perfeitamente em desktop, tablet e mobile
- **SEO Avançado:** Otimizado para ranquear em "contabilidade + anápolis" e especialidades
- **Acessível:** Segue diretrizes WCAG 2.1
- **Rápido:** Compressão GZIP, cache de navegador, lazy loading de imagens

## 🎨 Design e Cores

- **Verde Claro:** #007B3C (Primária)
- **Verde Escuro:** #022E15 (Secundária)
- **Branco:** #FFFFFF (Fundo)

### Fontes
- **Poppins:** Titulares e destaques (Google Fonts)
- **Inter:** Corpo de texto (Google Fonts)

## 📁 Estrutura de Arquivos

```
SiteMaisContabilidade/
├── index.html              # Página HOME (Serviços)
├── sobre/
│   └── index.html         # Página SOBRE (História)
├── contato/
│   └── index.html         # Página CONTATO (Localização + Formulário)
├── css/
│   ├── style.css          # Estilos principais
│   └── responsive.css     # Responsividade mobile/tablet
├── js/
│   ├── main.js            # Funcionalidades gerais
│   └── map.js             # Mapa interativo Google Maps
├── assets/
│   └── images/
│       ├── MAISCONTABILIDADELOGO.svg
│       ├── MOCANAFRENTEDOPC.png
│       ├── CRESCIMENTOEMPRESA.png
│       └── HOMENSAPERTODEMAOS.png
├── robots.txt             # Configuração para buscadores
├── sitemap.xml            # Mapa do site
├── .htaccess              # Configurações do servidor Apache
├── manifest.json          # Progressive Web App
├── humans.txt             # Créditos e informações
└── README.md              # Este arquivo
```

## 🚀 Instalação e Configuração

### 1. Clonar/Copiar o Repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd SiteMaisContabilidade
```

### 2. Configurar Google Maps API

O site usa Google Maps para localização. Você precisa:

1. Ir para [Google Cloud Console](https://console.cloud.google.com/)
2. Criar um novo projeto
3. Ativar a API do Google Maps
4. Criar uma chave API
5. Adicionar restrições (domínios, IPs)
6. Copiar a chave e substituir em `contato/index.html`:

```html
<!-- Procure por esta linha em contato/index.html -->
<script src="https://maps.googleapis.com/maps/api/js?key=SEU_API_KEY&language=pt-BR"></script>
```

Substitua `SEU_API_KEY` pela sua chave real.

### 3. Configurar Formulário de Contato

O formulário usa Formspree para enviar emails. Para configurar:

1. Ir para [Formspree](https://formspree.io/)
2. Criar uma conta
3. Criar um formulário novo
4. Obter o ID do formulário
5. Substituir em `contato/index.html`:

```html
<form id="formulario-contato" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

Substitua `YOUR_FORM_ID` pelo ID real.

### 4. Deployment

#### Para Apache com .htaccess
- Copiar todos os arquivos para a raiz do servidor
- Ativar `mod_rewrite`
- O `.htaccess` cuida das URLs amigáveis

#### Para Nginx
```nginx
server {
    listen 80;
    server_name www.maiscontabilidade.com.br;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
}
```

#### Para Vercel/Netlify
- Fazer push do código para o repositório Git
- Conectar ao Vercel/Netlify
- As URLs serão reescritas automaticamente

## 🔍 SEO

### Meta Tags
- ✅ Title tags únicos por página
- ✅ Meta descriptions otimizadas
- ✅ Keywords relacionadas a Anápolis e especialidades
- ✅ Open Graph para redes sociais
- ✅ Schema.org JSON-LD

### URLs Amigáveis
```
/ (HOME)
/sobre/ (SOBRE)
/contato/ (CONTATO)
```

### Palavras-Chave Principais
- Contabilidade Anápolis
- Terceiro Setor
- Simples Nacional
- Holding Familiar
- Processos Administrativos
- Contabilidade Goiás

### Sitemap
- `robots.txt` - Instruções para buscadores
- `sitemap.xml` - Mapa completo do site

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop:** 1200px+
- **Tablet:** 768px - 1024px
- **Mobile:** até 768px
- **Mobile Pequeno:** até 480px
- **Mobile Muito Pequeno:** até 360px

## 🎯 Heurísticas de Nielsen Implementadas

1. ✅ **Visibilidade do Status do Sistema** - Breadcrumbs, menu ativo
2. ✅ **Match entre Sistema e Mundo Real** - Linguagem clara e profissional
3. ✅ **Controle do Usuário** - Menu claro, formulários simples
4. ✅ **Prevenção de Erros** - Validação de formulário
5. ✅ **Ajuda e Documentação** - FAQ, formulário de contato
6. ✅ **Flexibilidade e Eficiência** - Múltiplos canais de contato
7. ✅ **Design Minimalista** - Sem poluição visual
8. ✅ **Navegação Intuitiva** - Menu claro e consistente

## 🎨 Princípios de Gestalt

- ✅ **Proximidade** - Elementos relacionados agrupados
- ✅ **Semelhança** - Componentes similares com mesmo estilo
- ✅ **Continuidade** - Fluxo visual fluido
- ✅ **Fechamento** - Formas completas mesmo com espaços
- ✅ **Figura-Fundo** - Contraste claro

## 🔒 Segurança

- ✅ HTTPS (recomendado)
- ✅ Content Security Policy (CSP)
- ✅ Proteção contra Clickjacking (X-Frame-Options)
- ✅ MIME-sniffing Prevention (X-Content-Type-Options)
- ✅ XSS Protection
- ✅ HSTS (HTTP Strict Transport Security)

## ⚡ Performance

- ✅ Compressão GZIP
- ✅ Cache do navegador
- ✅ Lazy loading de imagens
- ✅ Minificação de CSS/JS (recomendado)
- ✅ Imagens otimizadas (SVG + PNG)
- ✅ Fonts do Google (carregamento otimizado)

## 📞 Informações de Contato

**Localização:**
- Rua Ângelo Teles Esq. Rua Mestro Simão
- Vila Santa Maria de Nazareth
- Anápolis - GO, Brasil

**Telefones:**
- Celular/WhatsApp: (62) 99315-4555
- Fixo: (62) 3706-4555

**Coordenadas GPS:**
- Latitude: -16.3272238
- Longitude: -48.9444192

**Links:**
- Google Maps: [Clique aqui](https://www.google.com/maps/place/Mais+Contabilidade/@-16.327248,-48.9444915,20.77z/data=!4m6!3m5!1s0x935ea57147394f59:0xac90324c591cd5fa!8m2!3d-16.3272238!4d-48.9444192!16s%2Fg%2F11lnhpg_dl?hl=pt-BR)

## 📧 Suporte

Para dúvidas sobre configuração ou melhorias:
- Email: contato@maiscontabilidade.com.br
- Telefone: (62) 99315-4555

## 📄 Licença

© 2024 Mais Contabilidade. Todos os direitos reservados.

## 🙏 Créditos

- **Design:** Princípios de Gestalt e Heurísticas de Nielsen
- **Desenvolvimento:** HTML5, CSS3, JavaScript
- **Fontes:** Google Fonts (Poppins, Inter)
- **Ícones:** Emojis Unicode
- **Mapas:** Google Maps API
- **Formulários:** Formspree

---

**Desenvolvido com ♥ para trazer a melhor experiência contábil.**
