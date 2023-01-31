document.addEventListener('DOMContentLoaded', function(e){

  e.preventDefault()

  const saveModalInfoBtn = document.querySelector('.save-modal-btn')
  const addContactContainer = document.querySelector('.contacts-add-container')
  const addContactBtn = document.querySelector('.js-add-contact-btn')
  const controlArr = [];


  function renderDropList() {

    const item = document.createElement('ul');
    const phoneElement = document.createElement('li');
    const emailElement = document.createElement('li');
    const vkElement = document.createElement('li');
    const facebookElement = document.createElement('li');

    item.classList.add('select-drop-list');
    item.classList.add('list-reset');
    phoneElement.classList.add('select-drop-item');
    emailElement.classList.add('select-drop-item');
    vkElement.classList.add('select-drop-item');
    facebookElement.classList.add('select-drop-item');

    phoneElement.textContent = 'Доп.телефон'
    phoneElement.id = 'newPhone'
    emailElement.textContent = 'Email'
    vkElement.textContent = 'Vk'
    facebookElement.textContent = 'Facebook'




     item.append(phoneElement);
     item.append(emailElement);
     item.append(vkElement);
     item.append(facebookElement);



     return  {
      item,
      phoneElement,
      emailElement,
      vkElement,
      facebookElement
     }

  }


  function renderDropElement() {

    const selectWrapper = document.createElement('div')
    const typeButton = document.createElement('button');
    const typeButtonText = document.createElement('span');
    const typeButtonSvg = document.createElement('img');
    const dropList = renderDropList();
    const dropListItems = dropList.item;


    typeButton.classList.add('btn-reset');
    typeButton.classList.add('input-type-btn');
    typeButtonText.classList.add('input-type-btn-text');
    typeButtonSvg.classList.add('input-type-btn-svg');


    typeButtonText.textContent = `Телефон`;
    typeButtonSvg.src = './img/svg/arrow-btn.svg';
    

  

    typeButton.addEventListener('click', function(){
      dropListItems.classList.add('is-open');
     });

     typeButton.addEventListener('blur', function(){
      dropListItems.classList.remove('is-open');
     });

     dropList.phoneElement.addEventListener('click', function(){
      typeButtonText.textContent = dropList.phoneElement.textContent
      dropListItems.classList.remove('is-open');
      
     });

     dropList.emailElement.addEventListener('click', function(){
      typeButtonText.textContent = dropList.emailElement.textContent
      dropListItems.classList.remove('is-open');
      
     });

     dropList.vkElement.addEventListener('click', function(){
      typeButtonText.textContent = dropList.vkElement.textContent
      dropListItems.classList.remove('is-open');
      
     });

     dropList.facebookElement.addEventListener('click', function(){
      typeButtonText.textContent = dropList.facebookElement.textContent
      dropListItems.classList.remove('is-open');
      
     });

    selectWrapper.append(typeButton);
    selectWrapper.append(dropListItems);
    typeButton.append(typeButtonText);
    typeButton.append(typeButtonSvg);


    return selectWrapper
  }


  function renderAddElement() {
    const inputWrapper = document.createElement('div');

    const input = document.createElement('input');
    const closeBtn = document.createElement('button');
    const dropList = renderDropElement();

    inputWrapper.classList.add('input-modal-wrapper');

    input.classList.add('modal-contacts-input');
    closeBtn.classList.add('contacts-input-close-element')


    input.placeholder = 'Введите данные контакта';

    
    if ( dropList.textContent == 'Телефон' || dropList.textContent == 'Доп.телефон') {
      input.type = `number`;
    } else {
      input.type = `text`;
    }
    

    closeBtn.innerHTML = `<svg class="close-contacts-element-svg"  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
    </svg>`;



    inputWrapper.append(dropList);
    inputWrapper.append(closeBtn);
    inputWrapper.append(input);


    return {
      inputWrapper,
      dropList,
      closeBtn
            };

  }



  addContactBtn.addEventListener('click', () => {


    const wrapper = document.querySelector('.contacts-add-wrapper');
    const container = document.querySelector('.contacts-add-container');
    const inputElement = renderAddElement();

    controlArr.push(inputElement.inputWrapper);

    

    if (controlArr.length === 2) {
      addContactBtn.disabled = true;
    }

    container.append(inputElement.inputWrapper);

        inputElement.closeBtn.addEventListener('click', function(){
          e.preventDefault()
          controlArr.pop(inputElement.inputWrapper);
          inputElement.inputWrapper.remove()
          addContactBtn.disabled = false;
          console.log(controlArr)
         });

  })


  async function savingModalInfo(arr) {
   const response = await fetch('http://localhost:3000/api/clients', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: document.getElementById('first').value,
        surname: document.getElementById('last').value,
        lastName: document.getElementById('color').value,
        contacts: arr
      })
    })

  }

  function renderContactsArr() {
    const collectionArr = [];
    const contactsArr = [];
    const typeArr = document.querySelectorAll('.input-type-btn-text');
    const valueArr = document.querySelectorAll('.modal-contacts-input');



    typeArr.forEach(item => {
      let contactObj = { 
        type: item.innerText
      }
      collectionArr.push(contactObj) 
    })

    valueArr.forEach(item => {
      let contactObj = { 
        value: item.value
      }
      collectionArr.push(contactObj) 
    })


   for (let i = 0; i < collectionArr.length / 2; ++i) {
        let obj = Object.assign(collectionArr[i], collectionArr[i + (collectionArr.length / 2)])

        contactsArr.push(obj)
   }
        console.log(contactsArr)

        return contactsArr
  }

  function closeAddModal() {
      const modalOverlay = document.querySelector('.modal-new-client-overlay');
      const modal = document.querySelector('.modal-new-client');
      const modalInput = document.querySelectorAll('.form-input');
      const addContactContainer = document.querySelector('.contacts-add-container');

      modalOverlay.classList.toggle('modal-overlay--visible');
        modal.classList.toggle('modal--visible');
        addContactContainer.innerHTML = '';
        document.body.style.overflow = "auto";
    
        modalInput.forEach(item => {
          item.value = '';      
              item.classList.remove('filled');
              item.parentElement.classList.remove('focused')
        })
  }

 

  saveModalInfoBtn.addEventListener('click', (e) => {

    e.preventDefault()
    
    const contactsArr = renderContactsArr();

    savingModalInfo(contactsArr)

    closeAddModal()

  })



});
