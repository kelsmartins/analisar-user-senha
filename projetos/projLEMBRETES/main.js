const btnAdd = document.getElementById('btn-add');

function note(){

    let inpTxt = document.getElementById('inp-txt');
    return inpTxt
}

function inpPreenchido(){

    let noteText = note().value;
    if(noteText == ''){
        window.alert('Digite alguma coisa antes para adicionar')
    } else {
        return true
    }
}

function addLi(){

    if(inpPreenchido()){

        let noteText = note();
        let list = document.getElementById('list');

        let opt = document.createElement('li');
        opt.textContent = ` ${noteText.value}`

        list.appendChild(opt)

        noteText.value = ''

        isScroll()
    }
    
}

// funcao para adicionar uma barra de rolagem se conteudo dentro for maior que a altura da div
function isScroll(){

    const list = document.getElementById('list')

    if(list.scrollHeight > list.clientHeight){
        list.style.overflowY = 'scroll';
    } else {
        list.style.overflowY = 'hidden';
    }
}


btnAdd.addEventListener('click', addLi)


