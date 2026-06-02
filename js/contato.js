// contato.js
const form = document.getElementById('contato-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    mostrarFeedback('Por favor, preencha todos os campos.', 'erro');
    return;
  }

  // integração futura com backend ou EmailJS
  mostrarFeedback('Mensagem enviada com sucesso!', 'sucesso');
  form.reset();
});

function mostrarFeedback(texto, tipo) {
  const existente = document.querySelector('.feedback');
  if (existente) existente.remove();

  const feedback = document.createElement('p');
  feedback.className = `feedback feedback--${tipo}`;
  feedback.textContent = texto;

  form.insertAdjacentElement('afterend', feedback);

  setTimeout(() => feedback.remove(), 4000);
}