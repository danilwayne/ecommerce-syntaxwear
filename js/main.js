// Atualiza o ano do copyright automaticamente
const elAnoCopyright = document.getElementById('ano-copyright');
const anoAtual = new Date().getFullYear();
elAnoCopyright.setAttribute('datetime', anoAtual);
elAnoCopyright.textContent = anoAtual;
