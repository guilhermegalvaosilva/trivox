# Trivox - Impressão 3D

Vitrine comercial da Trivox, criada com HTML, CSS e JavaScript para apresentar
produtos em impressão 3D, atrair compradores e receber pedidos pelo WhatsApp.

## Funcionalidades

- Layout responsivo para desktop, tablet e mobile.
- Hero comercial com chamada para produtos e WhatsApp.
- Menu mobile acessível.
- Busca simples para filtrar conteúdos do site.
- Seções de produtos, diferenciais, como comprar, ideias, FAQ e pedido.
- Formulário que abre WhatsApp com pedido preenchido.
- Animações suaves ao scroll.
- Metadados básicos para SEO e compartilhamento.

## Estrutura

```text
/
├── index.html
├── script.js
├── style/
│   ├── page.css
│   ├── header.css
│   ├── nav.css
│   ├── main.css
│   ├── footer.css
│   └── style.css
├── img/
│   └── logo.png
└── README.md
```

## Ajuste importante

Antes de publicar, substitua o número usado em `script.js` e no link principal
do WhatsApp em `index.html` pelo número real da Trivox.

Formato esperado:

```js
const whatsappNumber = "5500000000000";
```

## Publicação

Por ser um site estático, basta abrir `index.html` no navegador ou publicar em
GitHub Pages, Netlify ou Vercel.
