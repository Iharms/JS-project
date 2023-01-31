let controlArr = [];
let controlChangeArr = [];
const clientsList = document.getElementById('clients-list');

let column = 'id',
columnDir = true


async function getAPiClients() {
  const response = await fetch('http://localhost:3000/api/clients')

  const data = await response.json();

  return data;
}

async function deleteClientTR(id) {
  await fetch(`http://localhost:3000/api/clients/${id}`, {
     method: 'DELETE'
   })
}

function renderDeleteModal(id, clientTr) {
  const modalDeleteOverlay = document.querySelector('.modal-delete-client-overlay');
  const modalDelete = document.querySelector('.modal-tools-delete');
  const btnDelete = document.querySelector('.modal-btn-delete');
  const cancelModal = document.querySelector('.modal-cancel-delete');
  const crossCancelModal = document.querySelector('.modal-cross-delete');

  modalDeleteOverlay.classList.add('modal-overlay--visible');
  modalDelete.classList.add('modal--visible');

  btnDelete.addEventListener('click', (e) => {
    e.preventDefault();
    modalDeleteOverlay.classList.remove('modal-overlay--visible');
    modalDelete.classList.remove('modal--visible');

      deleteClientTR(id);
      clientTr.remove()
         document.body.style.overflow = "auto";
  })


  cancelModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalDeleteOverlay.classList.remove('modal-overlay--visible');
    modalDelete.classList.remove('modal--visible');
         document.body.style.overflow = "auto";
  })

  crossCancelModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalDeleteOverlay.classList.remove('modal-overlay--visible');
    modalDelete.classList.remove('modal--visible');

         document.body.style.overflow = "auto";
  })

}

function getDate(date) {
  const dateS = new Date(date)
  const currentDate = dateS.toLocaleDateString();


  return currentDate
}

function getTime(date) {
  const dateS = new Date(date)
  const currentTime = dateS.toLocaleTimeString().slice(0,-3);


  return currentTime
}

// function createDeleteModal(id, clientTr, deleteContainer) {
  
//   const modalOverlay = document.createElement('div');
//   const modal = document.createElement('div');
//   const modalTittle = document.createElement('h3');
//   const modalText = document.createElement('p');
//   const modalBtn = document.createElement('button');
//   const modalCancel = document.createElement('button');
//   const modalBtnCross = document.createElement('button');

//   modalOverlay.classList.add('modal-delete-client-overlay');
//   modal.classList.add('modal-tools-delete');
//   modalTittle.classList.add('modal-tittle-delete');
//   modalText.classList.add('modal-text-delete');
//   modalBtn.classList.add('modal-btn-delete', 'btn-reset');
//   modalCancel.classList.add('modal-cancel-delete', 'btn-reset');
//   modalBtnCross.classList.add('modal-cross-delete', 'btn-reset');


//   modalTittle.innerText = 'Удалить клиента';
//   modalText.innerText = 'Вы действительно хотите удалить данного клиента?';
//   modalBtn.innerText = 'Удалить';
//   modalCancel.innerText = 'Отмена';
//   modalBtnCross.innerHTML = `<svg class="close-modal-svg" width="29" height="29" viewbox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
//   </svg>`;



//   modalBtn.addEventListener('click', async (e) => {
//     e.preventDefault()

//     await deleteClientTR(id)
//     clientTr.remove()
    
//       modalOverlay.classList.add('modal-overlay--hidden');
//         modal.classList.add('modal--hidden');

//         deleteContainer.innerHTML = '';
      
//         document.body.style.overflow = "auto";
//   })

//   modalCancel.addEventListener('click', (e) => {
//     e.preventDefault()
    
//     modalOverlay.classList.add('modal-overlay--hidden');
//     modal.classList.add('modal--hidden');

//     deleteContainer.innerHTML = '';
      
//         document.body.style.overflow = "auto";
//   })

//   modalBtnCross.addEventListener('click', (e) => {
//     e.preventDefault()
    
//     modalOverlay.classList.add('modal-overlay--hidden');
//     modal.classList.add('modal--hidden');

//     deleteContainer.innerHTML = '';
      
//         document.body.style.overflow = "auto";
//   })

//   deleteContainer.append(modalOverlay)
//   modalOverlay.append(modal);
//   modal.append(modalBtnCross);
//   modal.append(modalTittle);
//   modal.append(modalText);
//   modal.append(modalBtn);
//   modal.append(modalCancel);

//   return modalOverlay
// }


function createContactsList() {
  let list = document.createElement('ul');
  list.classList.add('list-reset', 'contacts-list');
  return list;
}

function createContactCountIcon(arrLenght) {
  const contactsCount = document.createElement('li');
  contactsCount.classList.add('table-contact-item', 'contact-count-icon');

  contactsCount.innerText = `+` + arrLenght

  return contactsCount;
}



function createContactsElement(list,apiContactsArr) {

   let contactsArr = apiContactsArr

   let contactsElementsArr = contactsArr.splice(0,4);
   let contactsRestElementsArr = contactsArr;
   let contactsCountLi = createContactCountIcon(contactsRestElementsArr.length);
   

   contactsElementsArr.forEach(item => {
     
      const contactsLi = document.createElement('li');
      const contactSvg = document.createElement('img');
 
 
      contactsLi.classList.add('table-contact-item')
      contactSvg.classList.add('tabel-contact-svg')
 
 
 
        if (item.type == 'Телефон' || item.type == 'Доп.телефон') {
          contactSvg.src = './img/svg/contacts-svg/phone.svg';
 
        } else if (item.type == 'Email') {
          contactSvg.src = './img/svg/contacts-svg/mail.svg';
 
        } else if (item.type == 'Vk') {
          contactSvg.src = './img/svg/contacts-svg/vk.svg';
 
        } else if (item.type == 'Facebook') {
          contactSvg.src = './img/svg/contacts-svg/fb.svg';
        } else if (item.type == 'Другое') {
          contactSvg.src = './img/svg/contacts-svg/another.svg';
        }
 
     
      const contactToolTip = document.createElement('div');
 
      contactToolTip.classList.add('contact-tool-tip');
 
      contactToolTip.innerText = item.value
 
      
    contactsLi.addEventListener('hover', () => {
     contactSvg.classList.add('opacity-1');
     contactToolTip.classList.add('opacity-1');
    })
 
 
      contactsLi.append(contactSvg);
      contactsLi.append(contactToolTip);
      list.append(contactsLi);

   });

   contactsCountLi.addEventListener('click', () => {

    contactsCountLi.remove();

    contactsRestElementsArr.forEach(item => {
      const contactsLi = document.createElement('li');
      const contactSvg = document.createElement('img');
 
 
      contactsLi.classList.add('table-contact-item')
      contactSvg.classList.add('tabel-contact-svg')
 
 
 
        if (item.type == 'Телефон' || item.type == 'Доп.телефон') {
          contactSvg.src = './img/svg/contacts-svg/phone.svg';
 
        } else if (item.type == 'Email') {
          contactSvg.src = './img/svg/contacts-svg/mail.svg';
 
        } else if (item.type == 'Vk') {
          contactSvg.src = './img/svg/contacts-svg/vk.svg';
 
        } else if (item.type == 'Facebook') {
          contactSvg.src = './img/svg/contacts-svg/fb.svg';
        } else if (item.type == 'Другое') {
          contactSvg.src = './img/svg/contacts-svg/another.svg';
        }
 
     
      const contactToolTip = document.createElement('div');
 
      contactToolTip.classList.add('contact-tool-tip');
 
      contactToolTip.innerText = item.value
 
      
    contactsLi.addEventListener('hover', () => {
     contactSvg.classList.add('opacity-1');
     contactToolTip.classList.add('opacity-1');
    })
 
 
      contactsLi.append(contactSvg);
      contactsLi.append(contactToolTip);
      list.append(contactsLi);

    })
   })
      if (contactsRestElementsArr.length != 0) list.append(contactsCountLi)
      
  return list;
}

function createClientTR(client) {

  const $clientTR = document.createElement('tr'),
        $idTD = document.createElement('td'),
        $fioTD = document.createElement('td'),
        $creationTimeTD = document.createElement('td'),
        $changeTimeTD = document.createElement('td'),
        $contactsTD = document.createElement('td'),
        $actionsTD = document.createElement('td')

        $clientTR.classList.add('client-tr-tools');
        $idTD.classList.add('client-td-id');
        $fioTD.classList.add('client-td-tools');
        $creationTimeTD.classList.add('client-td-tools');
        $changeTimeTD.classList.add('client-td-tools');
        $contactsTD.classList.add('client-td-tools', 'client-td-contacts');
        $actionsTD.classList.add('client-td-tools');


  const $idSpan = document.createElement('span'),
        $fioSpan = document.createElement('span'),
        $creationDateSpan = document.createElement('span'),
        $creationTimeSpan = document.createElement('span'),
        $changeDateSpan = document.createElement('span'),
        $changeTimeSpan = document.createElement('span'),
        $contactsList = createContactsList(),
        contactsListItem = createContactsElement($contactsList,client.contacts)


        $creationTimeSpan.classList.add('client-time-tools')
        $changeTimeSpan.classList.add('client-time-tools')
        
        const changeBtn = document.createElement('button'),
              deleteBtn = document.createElement('button'),
              changeBtnText = document.createElement('span'),
              deleteBtnText = document.createElement('span')

              changeBtn.classList.add('btn-reset', 'change-btn');
              deleteBtn.classList.add('btn-reset', 'delete-btn');

              changeBtn.innerHTML = `<svg class="change-svg td-btn-svg" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329V3.69329Z" fill="#9873FF"/>
                                     </svg>`;
              changeBtnText.innerText = 'Изменить'                  
              deleteBtn.innerHTML = `<svg class="delete-svg td-btn-svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
                                     </svg>`;
              deleteBtnText.innerHTML = 'Удалить';



         $idSpan.textContent = client.id
         $fioSpan.textContent = client.surname + ' ' + client.name + ' ' + client.lastName
         $creationDateSpan.textContent = getDate(client.createdAt)
         $creationTimeSpan.textContent = getTime(client.createdAt)
         $changeDateSpan.textContent =  getDate(client.updatedAt)
         $changeTimeSpan.textContent =  getTime(client.updatedAt)


         $clientTR.append($idTD);
         $idTD.append($idSpan);
         $clientTR.append($fioTD);
         $fioTD.append($fioSpan);
         $clientTR.append($creationTimeTD);
         $creationTimeTD.append($creationDateSpan);
         $creationTimeTD.append($creationTimeSpan);
         $clientTR.append($changeTimeTD);
         $changeTimeTD.append($changeDateSpan)
         $changeTimeTD.append($changeTimeSpan);
         $clientTR.append($contactsTD);
         $contactsTD.append(contactsListItem);
         $clientTR.append($actionsTD);
         $actionsTD.append(changeBtn);
         changeBtn.append(changeBtnText);
         $actionsTD.append(deleteBtn);
         deleteBtn.append(deleteBtnText);

         return { $clientTR,
                  $idSpan,
                  changeBtn,
                  deleteBtn }
}

function getSortClients(arr,prop, dir) {
  return arr.sort((a,b) => !dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1); 
}


async function createClientsTable() {

  const data = await getAPiClients();
  let clientsCopy = [...data]

  clientsCopy = getSortClients(clientsCopy,column,columnDir) 


  clientsList.innerHTML = '';

  clientsCopy.forEach(item => {
    let clientItem = createClientTR(item);
    clientsList.append(clientItem.$clientTR)

    clientItem.deleteBtn.addEventListener('click', (e) => {
      e.preventDefault()
      renderDeleteModal(clientItem.$idSpan.textContent, clientItem.$clientTR)
    })

    clientItem.changeBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      await renderAddChangeModal(clientItem.$idSpan.textContent, clientItem.$clientTR);
      
    })
  })

}

function createDropList() {

  const item = document.createElement('ul');
  const phoneElement = document.createElement('li');
  const emailElement = document.createElement('li');
  const vkElement = document.createElement('li');
  const facebookElement = document.createElement('li');
  const anotherElement = document.createElement('li');

  item.classList.add('select-drop-list');
  item.classList.add('list-reset');
  phoneElement.classList.add('select-drop-item');
  emailElement.classList.add('select-drop-item');
  vkElement.classList.add('select-drop-item');
  facebookElement.classList.add('select-drop-item');
  anotherElement.classList.add('select-drop-item');

  phoneElement.textContent = 'Доп.телефон';
  emailElement.textContent = 'Email';
  vkElement.textContent = 'Vk';
  facebookElement.textContent = 'Facebook';
  anotherElement.textContent = 'Другое';



   item.append(phoneElement);
   item.append(emailElement);
   item.append(vkElement);
   item.append(facebookElement);
   item.append(anotherElement);


   return  {
    item,
    phoneElement,
    emailElement,
    vkElement,
    facebookElement,
    anotherElement
   }

}


function createDropElement() {

  const selectWrapper = document.createElement('div')
  const typeButton = document.createElement('button');
  const typeButtonText = document.createElement('span');
  const typeButtonSvg = document.createElement('img');
  const dropList = createDropList();
  const dropListItems = dropList.item;


  typeButton.classList.add('btn-reset');
  typeButton.classList.add('input-type-btn');
  typeButtonText.classList.add('input-type-btn-text');
  typeButtonSvg.classList.add('input-type-btn-svg');


  typeButtonText.textContent = `Телефон`;
  typeButtonSvg.src = './img/svg/arrow-btn.svg';
  



  typeButton.addEventListener('click', function(e){
    e.preventDefault()
    dropListItems.classList.add('is-open');
   });

   typeButton.addEventListener('blur', function(e){
    e.preventDefault()
    dropListItems.classList.remove('is-open');
   });

   dropList.phoneElement.addEventListener('click', function(e){
    e.preventDefault()
    typeButtonText.textContent = dropList.phoneElement.textContent
    dropListItems.classList.remove('is-open');
    
   });

   dropList.emailElement.addEventListener('click', function(e){
    e.preventDefault()
    typeButtonText.textContent = dropList.emailElement.textContent
    dropListItems.classList.remove('is-open');
    
   });

   dropList.vkElement.addEventListener('click', function(e){
    e.preventDefault()
    typeButtonText.textContent = dropList.vkElement.textContent
    dropListItems.classList.remove('is-open');
    
   });

   dropList.facebookElement.addEventListener('click', function(e){
    e.preventDefault()
    typeButtonText.textContent = dropList.facebookElement.textContent
    dropListItems.classList.remove('is-open');
   });

   dropList.anotherElement.addEventListener('click', function(e){
    e.preventDefault()
    typeButtonText.textContent = dropList.anotherElement.textContent
    dropListItems.classList.remove('is-open');
   });

  selectWrapper.append(typeButton);
  selectWrapper.append(dropListItems);
  typeButton.append(typeButtonText);
  typeButton.append(typeButtonSvg);


  return {selectWrapper,
         typeButtonText}
}


function createAddElement() {
  const inputWrapper = document.createElement('div');

  const input = document.createElement('input');
  const closeBtn = document.createElement('button');
  const dropListObj = createDropElement();
  const dropList = dropListObj.selectWrapper
  const dropListTextContent = dropListObj.typeButtonText

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
    input,
    dropList,
    dropListTextContent,
    closeBtn
          };

}


document.addEventListener('DOMContentLoaded', function(e) {
  e.preventDefault()

  const saveModalInfoBtn = document.querySelector('.save-modal-btn');
  const addContactsWrapper = document.querySelector('.contacts-add-wrapper');
  const addContactContainer = document.querySelector('.contacts-add-container');
  const addContactBtn = document.querySelector('.js-add-contact-btn');
  const modalOverlayDeleteContainer = document.querySelector('.delete-modal-container');
  const clientsListThAll = document.querySelectorAll('.clientsTable th');







addContactBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const inputElement = createAddElement();

  addContactsWrapper.classList.add('contacts-add-wrapper--active');
  addContactContainer.classList.add('contacts-add-container--active');
  

  controlArr.push(inputElement.inputWrapper);


  if (controlArr.length <= 10) {

      addContactContainer.append(inputElement.inputWrapper);

    

    inputElement.closeBtn.addEventListener('click', function(){
      e.preventDefault()
      controlArr.pop(inputElement.inputWrapper);
     
      inputElement.inputWrapper.classList.remove('is-show');
      
      addContactBtn.disabled = false;
      console.log(controlArr)
      inputElement.inputWrapper.remove()
      
      if(controlArr.length == 0) {
        addContactsWrapper.classList.remove('contacts-add-wrapper--active');
        addContactContainer.classList.remove('contacts-add-container--active');
        }
     });


  } else {
    addContactBtn.disabled = true;
    controlArr.pop(inputElement.inputWrapper);
  }
 
})


async function savingModalInfo(arr) {
  await fetch('http://localhost:3000/api/clients', {
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


clientsListThAll.forEach(element => {
  let columnValue = document.querySelector(`.table-string-header[data-column='${column}']`);
  columnValue.classList.add('is-colored', 'is-rotated');

  element.addEventListener('click', function(e) {
     e.preventDefault();
     clientsListThAll.forEach(btn => {
      btn.classList.remove('is-colored', 'is-rotated');
     });     

     column = this.dataset.column
     columnDir = !columnDir

    let columnValue = document.querySelector(`.table-string-header[data-column='${column}']`);

     if(columnDir) {
      columnValue.classList.add('is-colored', 'is-rotated');
       if(columnValue == document.querySelector(`.table-string-header[data-column='${'surname'}']`)) {
         let firstLetter =  document.querySelector('.first-letter');
         let lastLetter = document.querySelector('.last-letter');

         firstLetter.classList.add('first-letter--active');
         lastLetter.classList.add('last-letter--active');
       }
     } else {
      
        let firstLetter =  document.querySelector('.first-letter');
        let lastLetter = document.querySelector('.last-letter');

        firstLetter.classList.remove('first-letter--active');
        lastLetter.classList.remove('last-letter--active');

      columnValue.classList.remove('is-colored', 'is-rotated');
     }

     console.log(column)
     console.log(columnDir)

     createClientsTable()
    
  })

})

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
      controlArr = [];
      modalInput.forEach(item => {
        item.value = '';      
            item.classList.remove('filled');
            item.parentElement.classList.remove('focused')
      })

      addContactsWrapper.classList.remove('contacts-add-wrapper--active');
      addContactContainer.classList.remove('contacts-add-container--active');
}


createClientsTable()


saveModalInfoBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const contactsArr = renderContactsArr();

  savingModalInfo(contactsArr)

  closeAddModal();

  createClientsTable();

})

});
