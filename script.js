const count = document.querySelector('#bag-count');
const bagStatus = document.querySelector('#bag-status');
let bagItems = 0;
document.querySelectorAll('.add').forEach((button) => {
  button.addEventListener('click', () => {
    bagItems += 1;
    count.textContent = bagItems;
    document.querySelector('.bag').setAttribute('aria-label', `Abrir sacola, ${bagItems} ${bagItems === 1 ? 'item' : 'itens'}`);
    bagStatus.textContent = `${button.dataset.product} foi adicionada à sacola.`;
  });
});
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.toggle('active', item === button));
    const filter = button.dataset.filter;
    document.querySelectorAll('.product').forEach((product) => {
      product.hidden = filter !== 'all' && !product.dataset.category.split(' ').includes(filter);
    });
  });
});
document.querySelector('#signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-status').textContent = 'Endereço registrado. Avisaremos quando a próxima edição estiver pronta.';
  event.target.reset();
});
