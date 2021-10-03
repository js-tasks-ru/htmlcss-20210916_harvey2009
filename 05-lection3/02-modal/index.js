(function() {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.classList.add('modal_active')
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.classList.remove('modal_active')
    document.body.overflow = 'initial';
  });
})();