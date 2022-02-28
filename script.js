
let listUsersDefault = ` [
            {
                "name": "Amanda",
                "email":"test1@example.com",
                "department":"Sales",
                "occupation":"Account executive",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"ativo"
            },
            {
                "name": "Rodrigo",
                "email":"test2@example.com",
                "department":"Marketing",
                "occupation":"Brand Manager",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Editor",
                "active":"ativo"
            },
            {
                "name": "Thiago",
                "email":"test3@example.com",
                "department":"Ads",
                "occupation":"Copywriting",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"ativo"
            },
            {
                "name": "Vanessa",
                "email":"test4@example.com",
                "department":"Social Media",
                "occupation":"Content Manager",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"inativo"
            },
            {
                "name": "Ashley S",
                "email":"test5@example.com",
                "department":"Branding & Marketing",
                "occupation":"Specialist",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"ativo"
            },
            {
                "name": "Kristopher",
                "email":"test5@example.com",
                "department":"Architectural Genie",
                "occupation":"Computer Network Architect",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"ativo"
            },
            {
                "name": "Robinson",
                "email":"test5@example.com",
                "department":"Branding",
                "occupation":"Trainee",
                "profile_image":"https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max",
                "cpf": 12354367890,
                "role":"Admin",
                "active":"ativo"
         
            }

] `

let dataUser = JSON.parse(listUsersDefault)
dataUser.map((items)=>{
    let userItem = document.querySelector('.list-employee-container');
    userItem.innerHTML += `
    <div class="list-item">
        <div class="li-left-side">
            <div class="img-employee">
                <img src="`+items.profile_image+`" alt="">
            </div>
            <div class="name-email-employee">
                <p class="name">`+items.name+`</p>
                <p class="email">`+items.email+`</p>
            </div>
            <div class="office-employee">
                <p class="department">`+items.department+`</p>
                <p class="ocupation">`+items.occupation+`</p>
            </div>
        </div>
        <div class="li-right-side">
            <div class="status-employee">
                <p>`+items.active+`</p>
            </div>
            <div class="function-employee">
                <p class="function">`+items.role+`</p>
            </div>
            <div class="edit-employee">
                <p onclick="removerDados()">Excluir</p>
            </div>
        </div>
    </div>
    `
})
 
console.log(document.querySelector('.column-name p'))

let inputName = document.getElementById('input-name')
let inputEmail = document.getElementById('input-email')
let inputDerp = document.getElementById('setor')
let inputOcup = document.getElementById('cargo')
let inputRole = document.getElementById('funcao')
let inputAct = document.getElementById('input-ative')
let inputImg = document.getElementById('fileimg')

let msgErro = document.querySelector('.msg-erro')

let validName = false
let validEmail = false
let validDerp = false 
let validOcup = false
let validRole = false
let validAct = false

let addFoto = document.querySelector('.input-foto-img--modificar')
let photo = document.querySelector('#imgfoto')
let file = document.getElementById('fileimg')

let cross = document.getElementById('close')
let openForm = document.querySelector('.btn-new')
let subBtn = document.getElementById('submit-btn')

inputName.addEventListener('keyup',()=>{
    if(inputName.value.length <= 2){
        inputName.style.border = '2px solid #F00';
        msgErro.style.color = '#F00'
        msgErro.innerHTML = 'O campo deve conter 3 caracteres ou mais';
        inputName.style.color = '#F00';
        validName = false
    }else{
        inputName.style.color = '#000'
        inputName.style.border = '2px solid #000';
        msgErro.style.display = 'none'
        validName = true
    }
})

inputEmail.addEventListener('keyup',()=>{
    if(inputEmail.value.length <= 2){
        inputEmail.style.border = '2px solid #F00';       
        inputEmail.style.color = '#F00';
        validEmail = false
    }else{
        inputEmail.style.color = '#000'
        inputEmail.style.border = '2px solid #000';
        validEmail = true
    }
})

inputDerp.addEventListener('change',()=>{
    
    if(inputDerp.value == 0){
      inputDerp.focus
      inputDerp.style.border = '2px solid #F00'
      validDerp = false
    }else{
        inputDerp.focus
        inputDerp.style.border = "2px solid #000"
        validDerp = true
    }

})

inputOcup.addEventListener('change',()=>{ 
    if(inputOcup.value == 0){
        inputOcup.focus
        inputOcup.style.border = '2px solid #F00'
        inputOcup = false
    }else{
        inputOcup.focus
        inputOcup.style.border = '2px solid #000'
        validOcup = true
    }

})

inputRole.addEventListener('change',()=>{ 
    if(inputRole.value == 0){
        inputRole.focus
        inputRole.style.border = '2px solid #F00'
        inputRole = false
    }else{
        inputRole.focus
        inputRole.style.border = '2px solid #000'
        validRole = true
    }

})

inputAct.addEventListener('change',()=>{
    if(inputAct.value == 0){
        inputAct.focus
        inputAct.style.border = '2px solid #F00'
        validAct = false
    }else if(inputAct.value == 'ativo'){
        inputAct.focus
        inputAct.style.border = '2px solid #000'
        validAct = true
    }else {
        inputAct.focus
        inputAct.style.border = '2px solid #000'
        validAct = true
    }
})
function limparDados(){
    inputName.value = '';
    inputAct.value = 0;
    inputEmail.value = '';
    inputDerp.value = 0;
    inputOcup.value = 0;
    inputRole.value = 0;

}


armazenar =()=>{
    if(validName && validEmail && validDerp && validOcup && validRole && validAct){
        var data = {
            nome: inputName.value,
            email: inputEmail.value,
            department:inputDerp.value,
            ocupation:inputOcup.value,
            profile_image:inputImg.value,
            cpf:"123456789",
            role:inputRole.value,
            active:inputAct.value,
        }
        
        let data_string = JSON.stringify(data)
        console.log(data_string)

        localStorage.setItem('data',data_string)
        console.log(localStorage)

        let data_get =JSON.parse(localStorage.getItem('data'))
        console.log(data_get)         
        let userItem = document.querySelector('.list-employee-container');
        userItem.innerHTML += `
        <div class="list-item">
            <div class="li-left-side">
                <div class="img-employee">
                    <img src="`+data_get.profile_image+`" alt="">
                </div>
                <div class="name-email-employee">
                    <p class="name">`+data_get.nome+`</p>
                    <p class="email">`+data_get.email+`</p>
                </div>
                <div class="office-employee">
                    <p class="department">`+data_get.department+`</p>
                    <p class="ocupation">`+data_get.ocupation+`</p>
                </div>
            </div>
            <div class="li-right-side">
                <div class="status-employee">
                    <p id="change-style">`+data_get.active+`</p>
                </div>
                <div class="function-employee">
                    <p class="function">`+data_get.role+`</p>
                </div>
                <div class="edit-employee">
                    <p onclick="removerDados()">Excluir</p>
                </div>
            </div>
        </div>
        `    
        limparDados()
       
    }else{
        alert('Preencha todos os campos')
    }
}
        
function removerDados(){
    localStorage.removeItem('data')
    
}

addFoto.addEventListener('click',()=>{
    file.click()
    console.log('clicou')

})

file.addEventListener('change',(event)=>{
    console.log(event)
    let reader = new FileReader();

    reader.onload = () =>{
    photo.src = reader.result;
    }
    reader.readAsDataURL(file.files[0])
})



cross.addEventListener('click',()=>{
    console.log('clicou')
    document.querySelector('.absolute-space').style.display = 'none'
    limparDados()
})



openForm.addEventListener('click',()=>{
    document.querySelector('.absolute-space').style.display = 'flex'
    window.scrollTo({
        top : 0,
        behavior:'smooth'
    })
    window.bind
})



subBtn.addEventListener('click',(e)=>{
    e.preventDefault()
})
