const count = document.querySelector('#bag-count');
const bagStatus = document.querySelector('#bag-status');
let bagItems = 0;
document.querySelectorAll('.add').forEach((button) => {
  button.addEventListener('click', () => {
    bagItems += 1;
    const productItems = Number(button.dataset.count || 0) + 1;
    button.dataset.count = productItems;
    count.textContent = bagItems;
    button.querySelector('.add-label').textContent = `Adicionada (${productItems})`;
    button.setAttribute('aria-label', `Adicionar ${button.dataset.product} novamente à sacola; ${productItems} ${productItems === 1 ? 'unidade adicionada' : 'unidades adicionadas'}`);
    bagStatus.textContent = `${button.dataset.product} foi adicionada à sacola. Sacola com ${bagItems} ${bagItems === 1 ? 'item' : 'itens'}.`;
  });
});
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', selected);
    });
    const filter = button.dataset.filter;
    document.querySelectorAll('.product').forEach((product) => {
      product.hidden = filter !== 'all' && !product.dataset.category.split(' ').includes(filter);
    });
    const visibleCount = document.querySelectorAll('.product:not([hidden])').length;
    document.querySelector('#filter-status').textContent = `${visibleCount} ${visibleCount === 1 ? 'peça exibida' : 'peças exibidas'}.`;
  });
});
const form = document.querySelector('#signup-form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const formStatus = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = '';
  if (!email.validity.valid) {
    email.setAttribute('aria-invalid', 'true');
    emailError.textContent = email.validity.valueMissing ? 'Informe seu e-mail.' : 'Informe um e-mail válido, como voce@exemplo.com.';
    email.focus();
    return;
  }
  email.removeAttribute('aria-invalid');
  emailError.textContent = '';
  formStatus.textContent = 'Endereço registrado. Avisaremos quando a próxima edição estiver pronta.';
  form.reset();
});
email.addEventListener('input', () => {
  email.removeAttribute('aria-invalid');
  emailError.textContent = '';
});
