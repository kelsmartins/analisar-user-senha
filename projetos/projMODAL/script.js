const btnopenModal = document.getElementById('btnopen-modal');
const btncloseModal = document.getElementById('btnclose-modal');
const modalBox = document.getElementById('modal-box');

function openModal(){
    modalBox.classList.add('open')
}

function closeModal(e){ 
    if(e.target.id == 'btnclose-modal' || e.target.id == 'modal-box'){
        modalBox.classList.remove('open')
    }
}

btnopenModal.addEventListener('click', openModal);
modalBox.addEventListener('click', closeModal)