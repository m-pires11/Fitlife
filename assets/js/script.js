// MENU HAMBÚRGUER
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // abre/fecha o menu
});

// FORMULÁRIO DE CADASTRO
function cadastrar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const senha = document.getElementById('senha').value;

  if (nome && email && telefone && senha) {
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';
    setTimeout(() => {
      mensagem.style.display = 'none';
    }, 3000);

    // Limpar campos
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('senha').value = '';
  } else {
    alert('Por favor, preencha todos os campos.');
  }
}
