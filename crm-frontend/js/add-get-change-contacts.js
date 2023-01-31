const modalOverlay = document.querySelector('.modal-change-client-overlay');

function createAddChangeModal(id) {
  
    
    const   modalContainer = document.createElement('div'),
              closeModalCrossBtn = document.createElement('button'),
              modalTittleWrapper = document.createElement('div'),
                modalTittle = document.createElement('h2'),
                modalId = document.createElement('span'),
              modalForm = document.createElement('form'),
                nameFormGroup = document.createElement('div'),
                  nameFormLabel = document.createElement('label'),
                  nameFormInput = document.createElement('input'),
                secondnameFormGroup = document.createElement('div'),
                  secondnameFormLabel = document.createElement('label'),
                  secondnameFormInput = document.createElement('input'),
                lastnameFormGroup = document.createElement('div'),
                  lastnameFormLabel = document.createElement('label'),
                  lastnameFormInput = document.createElement('input'),
                contactsAddChangeWrapper = document.createElement('div'),
                  contactsAddChangeContainer = document.createElement('div'),
                    contactsAddChangeBtn = document.createElement('button'),
                      contactsAddChangeBtnSpan = document.createElement('span'),
                modalChangelBtnWrapper = document.createElement('div'),
                  saveModalChangeBtn = document.createElement('button'),
                  cancelModalChangeBtn  = document.createElement('button')

            modalContainer.classList.add('modal-change-client');
              closeModalCrossBtn.classList.add('close-modal-change-btn', 'btn-reset');
              modalTittleWrapper.classList.add('title-id-warpper');
                modalTittle.classList.add('modal-tittle', 'modal-change-tittle');
                modalId.classList.add('modal-client-id');
              nameFormGroup.classList.add('form-group');
                nameFormLabel.classList.add('form-label');
                nameFormInput.classList.add('form-input');
              secondnameFormGroup.classList.add('form-group');
                secondnameFormLabel.classList.add('form-label');
                secondnameFormInput.classList.add('form-input');
              lastnameFormGroup.classList.add('form-group');
                lastnameFormLabel.classList.add('form-label');
                lastnameFormInput.classList.add('form-input');
              contactsAddChangeWrapper.classList.add('contacts-add-change-wrapper');
                contactsAddChangeContainer.classList.add('contacts-add-change-container');
                  contactsAddChangeBtn.classList.add('btn-reset', 'contacts-btn', 'js-add-change-contact-btn');
                    contactsAddChangeBtnSpan.classList.add('contacts-btn-text');
              modalChangelBtnWrapper.classList.add('modal-btn-wrapper', 'flex')
                saveModalChangeBtn.classList.add('save-modal-change-btn', 'btn-reset');
                cancelModalChangeBtn.classList.add('cancel-modal-change-btn', 'btn-reset', 'under-line-delete');

          closeModalCrossBtn.innerHTML = `<svg class="close-modal-svg" width="29" height="29" viewbox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
          </svg>`;

          modalTittle.innerText = `Изменить данные`;
          modalId.innerText ='ID: ' + id;

          modalForm.action = `#`;

            nameFormLabel.for = `name`;
              nameFormLabel.innerHTML = `Имя<span class="star-color">*</span>`;
              nameFormInput.id = `name`;
              nameFormInput.type = `text`;

            secondnameFormLabel.for = `secondname`;
              secondnameFormLabel.innerHTML = `Фамилия<span class="star-color">*</span>`;
              secondnameFormInput.id = `secondname`;
              secondnameFormInput.type = `text`;

            lastnameFormLabel.for = `lastname`;
                lastnameFormLabel.innerHTML = `Отчество`;
                lastnameFormInput.id = `lastname`;
                lastnameFormInput.type = `text`;

                contactsAddChangeBtn.innerHTML = `<svg class="contacts-btn-svg" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
                </svg>`;
                  contactsAddChangeBtnSpan.innerHTML = `Добавить контакт`;

            saveModalChangeBtn.innerHTML = `Сохранить`;   
            cancelModalChangeBtn.innerHTML = `<span>Удалить клиента</span> <div class="under-line"></div>`;


          

          modalOverlay.append(modalContainer);
            modalContainer.append(closeModalCrossBtn);
            modalContainer.append(modalTittleWrapper);
              modalTittleWrapper.append(modalTittle);
              modalTittleWrapper.append(modalId);
            modalContainer.append(modalForm);
              modalForm.append(nameFormGroup);
                nameFormGroup.append(nameFormLabel);
                nameFormGroup.append(nameFormInput);
              modalForm.append(secondnameFormGroup);
                secondnameFormGroup.append(secondnameFormLabel);
                secondnameFormGroup.append(secondnameFormInput);
              modalForm.append(lastnameFormGroup);
                lastnameFormGroup.append(lastnameFormLabel);
                lastnameFormGroup.append(lastnameFormInput);
              modalForm.append(contactsAddChangeWrapper);
                contactsAddChangeWrapper.append(contactsAddChangeContainer);
                  contactsAddChangeWrapper.append(contactsAddChangeBtn);
                    contactsAddChangeBtn.append(contactsAddChangeBtnSpan);
              modalForm.append(modalChangelBtnWrapper);
                  modalChangelBtnWrapper.append(saveModalChangeBtn);
                  modalChangelBtnWrapper.append(cancelModalChangeBtn);


return   { modalContainer,
           closeModalCrossBtn,
           modalTittleWrapper,
           modalTittle,
           modalId,
           modalForm,
           nameFormGroup,
           nameFormLabel,
           nameFormInput,
           secondnameFormGroup,
           secondnameFormLabel,
           secondnameFormInput,
           lastnameFormGroup,
           lastnameFormLabel,
           lastnameFormInput,
           contactsAddChangeWrapper,
           contactsAddChangeContainer,
           contactsAddChangeBtn,
           contactsAddChangeBtnSpan,
           modalChangelBtnWrapper,
           saveModalChangeBtn,
           cancelModalChangeBtn }

}

async function getClientIDInfo(id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`)
  
    const data = await response.json();
    
    return data;
}



function renderContactsArrApiElements(arrT,modalItem) {
 
    arrT.forEach(item => {
      const contactsElement = createAddElement();
      contactsElement.dropListTextContent.textContent = item.type
      contactsElement.input.value = item.value
      controlChangeArr.push(contactsElement.inputWrapper);
      modalItem.contactsAddChangeContainer.append(contactsElement.inputWrapper);
      
      modalItem.contactsAddChangeWrapper.classList.add('contacts-add-wrapper--active');
      modalItem.contactsAddChangeContainer.classList.add('contacts-add-container--active');
    
  
      contactsElement.closeBtn.addEventListener('click', function(e){
        e.preventDefault();
        controlChangeArr.pop(contactsElement.inputWrapper);
        contactsElement.inputWrapper.remove()
        modalItem.contactsAddChangeBtn.disabled = false;
  
        if(controlChangeArr.length == 0) {
          modalItem.contactsAddChangeWrapper.classList.remove('contacts-add-wrapper--active');
          modalItem.contactsAddChangeContainer.classList.remove('contacts-add-container--active');
          }
        
       });
     })
}   
   
function renderClientInform(getClientApiId,modalChangeItem) {
         
        modalChangeItem.nameFormInput.value = getClientApiId.name
        modalChangeItem.secondnameFormInput.value = getClientApiId.surname
        modalChangeItem.lastnameFormInput.value = getClientApiId.lastName

        if (getClientApiId.name) {
            modalChangeItem.nameFormInput.parentElement.classList.add('focused')
            modalChangeItem.nameFormInput.classList.add('filled')
        }

        
        if (getClientApiId.surname) {
            modalChangeItem.secondnameFormInput.parentElement.classList.add('focused')
            modalChangeItem.secondnameFormInput.classList.add('filled')
        }

        
        if (getClientApiId.lastName) {
            modalChangeItem.lastnameFormInput.parentElement.classList.add('focused')
            modalChangeItem.lastnameFormInput.classList.add('filled')
        }
        
        renderContactsArrApiElements(getClientApiId.contacts,modalChangeItem)
            
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
 
    return contactsArr
}
 
function closeAddModal(item) {
    modalOverlay.classList.remove('modal-overlay--visible');
    item.contactsAddChangeWrapper.classList.remove('contacts-add-wrapper--active');
    item.contactsAddChangeContainer.classList.remove('contacts-add-container--active');
    item.contactsAddChangeContainer.innerHTML = '';
         document.body.style.overflow = "auto";
         controlChangeArr.length = 0;
         modalOverlay.innerHTML = '';
}

async function changeClientTR(id,arr) {
     await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: document.getElementById('name').value,
        surname: document.getElementById('secondname').value,
        lastName: document.getElementById('lastname').value,
        contacts: arr
      })
    })


}


async function renderAddChangeModal(modalId, clientTR) {
  const changeModal = createAddChangeModal(modalId);
  const changeModalContainer = changeModal.modalContainer;
  const getApiCLientInformArr = await getClientIDInfo(modalId);

  modalOverlay.classList.add('modal-overlay--visible');
    changeModalContainer.classList.add('modal--visible');

 

  const modalInputsArr = [changeModal.nameFormInput, changeModal.secondnameFormInput, changeModal.lastnameFormInput]

  modalInputsArr.forEach(item => {
  
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


  renderClientInform(getApiCLientInformArr,changeModal)


    

changeModal.contactsAddChangeBtn.addEventListener('click', (e) => {
     e.preventDefault();
        const inputElement = createAddElement();

     changeModal.contactsAddChangeWrapper.classList.add('contacts-add-wrapper--active');
    changeModal.contactsAddChangeContainer.classList.add('contacts-add-container--active');

    
   controlChangeArr.push(inputElement.inputWrapper);

   if (controlChangeArr.length <= 10) {  

      changeModal.contactsAddChangeContainer.append(inputElement.inputWrapper);

        inputElement.closeBtn.addEventListener('click', function(e){
          e.preventDefault()
          controlChangeArr.pop(inputElement.inputWrapper);
          inputElement.inputWrapper.remove()
          changeModal.contactsAddChangeBtn.disabled = false;    
           
           if(controlChangeArr.length == 0) {
            changeModal.contactsAddChangeWrapper.classList.remove('contacts-add-wrapper--active');
            changeModal.contactsAddChangeContainer.classList.remove('contacts-add-container--active');
            }
          
          console.log(controlChangeArr)
         });
         console.log(controlChangeArr)
   
    } else {
        changeModal.contactsAddChangeBtn.disabled = true;  
        controlChangeArr.pop(inputElement.inputWrapper); 
    }
      
    })

    changeModal.closeModalCrossBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeAddModal(changeModal);

        changeModal.contactsAddChangeBtn.disabled = false;
    })

    changeModal.cancelModalChangeBtn.addEventListener('click', (e) => {
        e.preventDefault();
          closeAddModal(changeModal);
          renderDeleteModal(modalId, clientTR)
        changeModal.contactsAddChangeBtn.disabled = false;
    });

    changeModal.saveModalChangeBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        
        const contactsArr = renderContactsArr();

        console.log(contactsArr)
    
        await changeClientTR(modalId,contactsArr)
    
        closeAddModal(changeModal);
        
        createClientsTable()
         
    })

}
   
