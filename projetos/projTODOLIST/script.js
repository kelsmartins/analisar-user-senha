const btTask = document.getElementById('btnTask');

const values = [];

function inpTask(){
    let getinpTask = document.getElementById('inputTask');
    return getinpTask;
}

function theList(){
    let gettheList = document.getElementById('list');
    return gettheList;
}

function addTask(){

    let liTask = inpTask();

    let newLi = document.createElement('li');
    newLi.innerHTML = `<button id="btn-left" onclick="didTask"></button>${liTask.value}<button id="btn-right" onclick="eraseTask()"></button>`;

    values.push(newLi)  
    liTask.value = '';
    
    showInlist()
}

function showInlist(){

    let list = theList();

    for(let v in values){
        list.appendChild(values[v])
    }
}


btTask.addEventListener('click', addTask)