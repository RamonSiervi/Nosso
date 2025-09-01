# 🏋️ Seu Plano de Treinos — Tema Claro

Site estático (HTML/CSS/JS) com **treinos organizados por seção**, mídia de **vídeo/GIF ao lado** e botão **Exportar PDF** (exporta todos os treinos com texto + links das demos).

## ✅ O que tem
- Layout moderno (cartões, grid, responsivo).
- Cada exercício com **Séries, Carga, Intervalo** e **link do vídeo**.
- **PDF** exporta todos os treinos (texto + links) para maior compatibilidade.
- Código simples, sem build — perfeito para GitHub Pages.

## 🚀 Como publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `meu-site-treinos`).
2. Faça upload de **todos** os arquivos desta pasta.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
5. Seu site ficará disponível em `https://SEU-USUARIO.github.io/meu-site-treinos`.

## ✏️ Personalizar
- Troque mídias/links em `script.js` dentro do objeto `window.__TRAINING__`.
- Você pode substituir um vídeo (`.mp4`) por um GIF adicionando `gif: "URL_DO_GIF"` no exercício.

Bom treino! 💪