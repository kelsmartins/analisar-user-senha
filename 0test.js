var btnSignin = document.getElementById('btn-signin')
var btnSignup = document.getElementById('btn-signup')

var usuario = null;
var senha = null;
var usuarioTest = null;
var senhaTest = null;


function userIn(){
    let getuserin = document.getElementById('user-signin').value
    return getuserin
}
 


function passIn(){
    let getpassin = document.getElementById('password-signin').value
    return getpassin
}

function userUp(){
    let getuserup = document.getElementById('user-signup').value
    return getuserup
}
 


function passUp(){
    let getpassup = document.getElementById('password-signup').value
    return getpassup
}


function fieldsIn(){
    
    let useIn = userIn();
    let pasIn = passIn();

    if( useIn === '' || pasIn === ''){
        window.alert('preecha os campos')
    } else {
        return true
    }
}


function save(){

    if(fieldsIn()){

        let useIn = userIn();
        let pasIn = passIn();

            usuario = useIn;
            senha = pasIn;
            
            show()
    }
}


function show(){

    let res = document.getElementById('res-signin')
    res.textContent = `Usuário e senha adicionados`

}



function fieldsUp(){
    
    let useUp = userUp();
    let pasUp = passUp();

    if( useUp === '' || pasUp === ''){
        window.alert('preecha os campos')
    } else {
        return true
    }
}

function addTo(){

    if(fieldsUp()){

        let useUp = userUp();
        let pasUp = passUp();

            usuarioTest = useUp;
            senhaTest = pasUp;

            comparenshow()

    }
}


function comparenshow(){

     let res = document.getElementById('res-signup')
     
    if(usuarioTest == usuario && senhaTest == senha){
       
        res.textContent = `Bem-vindo`
    } else {
        res.textContent = `Usuário ou senha errados`
    }

}


btnSignin.addEventListener('click', save)
btnSignup.addEventListener('click', addTo)