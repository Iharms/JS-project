document.addEventListener('DOMContentLoaded', function(){

const btns = document.querySelector('.js-btn-new-add');
const modalOverlay = document.querySelector('.modal-new-client-overlay')
const modal = document.querySelector('.modal-new-client');
const closeBtn = document.querySelector('.close-modal-btn');
const cancelBtn = document.querySelector('.cancel-modal-btn');
const modalInput = document.querySelectorAll('.form-input');
const addContactsWrapper = document.querySelector('.contacts-add-wrapper');
const addContactContainer = document.querySelector('.contacts-add-container');
const addContactBtn = document.querySelector('.js-add-contact-btn')


modalInput.forEach(item => {

  item.addEventListener('focus', () => {
    item.parentElement.classList.add('focused')
  })
  
  item.addEventListener('blur', () => {
    let inputValue = item.value
    if (inputValue == "") {
      item.classList.remove('filled');
      item.parentElement.classList.remove('focused')
    } else {
      item.classList.add('filled')
    }
  })
})





btns.addEventListener('click', (e) => {
  e.preventDefault()
  modalOverlay.classList.toggle('modal-overlay--visible');
    modal.classList.toggle('modal--visible');
    document.body.style.overflow = "hidden";
  });


closeBtn.addEventListener('click', (e) => {
  e.preventDefault()
    modalOverlay.classList.remove('modal-overlay--visible');
    modal.classList.remove('modal--visible');
    addContactsWrapper.classList.remove('contacts-add-wrapper--active');
    addContactContainer.classList.remove('contacts-add-container--active');
    controlArr = [];
    addContactBtn.disabled = false;
    addContactContainer.innerHTML = '';
    document.body.style.overflow = "auto";

    modalInput.forEach(item => {
      item.value = '';      
        item.classList.remove('filled');
        item.parentElement.classList.remove('focused');
    })
});

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
    modalOverlay.classList.remove('modal-overlay--visible');
    modal.classList.remove('modal--visible');
    addContactsWrapper.classList.remove('contacts-add-wrapper--active');
    addContactContainer.classList.remove('contacts-add-container--active');
 
    addContactBtn.disabled = false;
    addContactContainer.innerHTML = '';
    document.body.style.overflow = "auto";

    controlArr = [];

    modalInput.forEach(item => {
      item.value = '';      
        item.classList.remove('filled');
        item.parentElement.classList.remove('focused');
    })
  });
});
