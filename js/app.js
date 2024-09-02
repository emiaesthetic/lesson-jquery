const modalOrder = $('.modal-order');
const presentBtn = $('.present__btn');

presentBtn.click(() => modalOrder.show(300));
modalOrder.on('click', (event) => {
  const target = $(event.target);
  const isCloseBtn = target.closest('.modal-order__close').length;

  if (target.is(modalOrder) || isCloseBtn) {
    modalOrder.hide(300);
  }
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder')}`);
});

modalOrderInput.blur(() => modalOrderTitle.text('Заполните форму'));

$('.characteristics__item').click(function() {
  $(this).children().toggleClass('active');
});

$('.acc__list').on('click', '.acc__item', function() {
  $(this).children('.acc__text').slideToggle(300);
});

const modalOrderForm = $('.modal-order__form')
modalOrderForm.submit(function(event) {
  event.preventDefault();

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos/',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text(
          `Спасибо, Ваша заявка принята, номер заявки ${data.id}`,
      );
      modalOrderForm.slideUp(100);
    },
    error() {
      modalOrderTitle('Что-то пошло не так, попробуйте позже...');
    },
  });

  this.reset();
});

const menu = $('.navigation');
const burgerBtn = $('.header__burger');
const menuCloseBtn = $('.navigation__close');

burgerBtn.on('click', () => {
  menu.animate({left: 0}, 500, () => {
    menuCloseBtn.animate({opacity: 1}, 300, 'swing');
  });
});

menuCloseBtn.on('click', () => {
  menuCloseBtn.animate({opacity: 0}, 300, 'swing', () => {
    menu.animate({left: '-100%'}, 500);
  });
});
