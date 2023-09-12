const numberAnual1 = document.querySelector(".numberAnual1");
const numberAnual2 = document.querySelector(".numberAnual2");
const numberAnual3 = document.querySelector(".numberAnual3");
const numberMensual1 = document.querySelector(".numberMensual1");
const numberMensual2 = document.querySelector(".numberMensual2");
const numberMensual3 = document.querySelector(".numberMensual3");
const containerBoll = document.querySelector(".containerBoll");
const boll = document.querySelector(".boll");

const sectionBasic = document.querySelector(".sectionBasic");
const sectionProfessional = document.querySelector(".sectionProfessional");
const sectionMaster = document.querySelector(".sectionMaster");
const information = document.querySelector(".info");
const information2 = document.querySelector(".info2");
const information3 = document.querySelector(".info3");
const LEARNMore = document.querySelector(".LEARNMore");
const LEARNMore2 = document.querySelector(".LEARNMore2");
const LEARNMore3 = document.querySelector(".LEARNMore3");
const ReturnNed = document.querySelector(".ReturnNed");
const ReturnNed2 = document.querySelector(".ReturnNed2");
const ReturnNed3 = document.querySelector(".ReturnNed3");
const notificacionesOff = document.querySelector(".imgNoti")
const notificacionesOm = document.querySelector(".imgNotic")
const notification = document.querySelector(".notification")
const divContainer = document.getElementById('NotifiContainer');

const sectionsGenerales = [sectionBasic,sectionProfessional,sectionMaster]
const numberAnual = [numberAnual1,numberAnual2,numberAnual3];
const numberMensual = [numberMensual1,numberMensual2,numberMensual3];
const personasRegistradas = []


LEARNMore.addEventListener('click',informationGlod);
LEARNMore2.addEventListener('click',informationGlod2);
LEARNMore3.addEventListener('click',informationGlod3);
ReturnNed.addEventListener('click',returnNAD);
ReturnNed2.addEventListener('click',returnNAD2);
ReturnNed3.addEventListener('click',returnNAD3);
containerBoll.addEventListener('click',openAnual);
containerBoll.addEventListener('click', offButton);
notificacionesOff.addEventListener('click',seenNotifications)
notificacionesOff.addEventListener('click' , offNoti);




function openNoti() {
    if (personasRegistradas.length == 0) {
        notificacionesOff.classList.add('inactive');
        notificacionesOm.classList.remove('inactive');
        notification.classList.add('inactive');
    }else if(personasRegistradas.length >= 0){
        notificacionesOff.classList.remove('inactive');
        notificacionesOm.classList.add('inactive');
    }
}

function offNoti() {
    if (notification.classList.contains('inactive')) {
        notification.classList.remove('inactive');
    }else if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
        
    }
}

function informationGlod() {
    information.classList.remove('inactive');
    sectionsGenerales[0].classList.add('sectionInfo');
    personasRegistradas.push('A BASIC person has been registered')
    openNoti();
}
function informationGlod2() {
    information2.classList.remove('inactive');
    sectionsGenerales[1].classList.add('sectionInfo');
    personasRegistradas.push('A person has been registered as a PROFESSIONAL')
    openNoti();

    if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
    }
}

function informationGlod3() {
    information3.classList.remove('inactive');
    sectionsGenerales[2].classList.add('sectionInfo');
    personasRegistradas.push('A person has been registered as a MASTER')
    openNoti();

    if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
        
    }
    
}
function returnNAD () {
    information.classList.add('inactive')
    sectionsGenerales[0].classList.remove('sectionInfo');
    personasRegistradas.pop('A BASIC person has been registered');
    openNoti();

    if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
    }
}

function returnNAD2 () {
    information2.classList.add('inactive')
    sectionsGenerales[1].classList.remove('sectionInfo');
    personasRegistradas.pop('A person has been registered as a PROFESSIONAL')
    openNoti();

    if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
        
    }
}
function returnNAD3() {
    information3.classList.add('inactive')
    sectionsGenerales[2].classList.remove('sectionInfo');
    personasRegistradas.pop('A person has been registered as a MASTER')
    openNoti();

    if(!notification.classList.contains('inactive')){
        notification.classList.add('inactive');
        
    }
}

function offButton() {
    
    if (!boll.classList.contains('botonIzqierda')) {
    boll.classList.add('botonIzqierda');
    }else if (boll.classList.contains('botonIzqierda')){
    boll.classList.remove('botonIzqierda');
    }
}

function openAnual() {
    const hay = numberAnual[0].classList.contains('inactive')
    const hey = numberMensual[0].classList.contains('inactive');

    if (hay) {
        numberAnual.forEach(item => item.classList.remove("inactive"))
        numberMensual.forEach(item => item.classList.add("inactive"))
    }else if (hey){
        numberAnual.forEach(item => item.classList.add("inactive"))
        numberMensual.forEach(item => item.classList.remove("inactive"))
    }
}


function seenNotifications() {
    const divContainer = document.getElementById('NotifiContainer');
    divContainer.innerHTML = '';
    personasRegistradas.map(item => {
        const i = document.createElement('div')
        i.innerText = item
        divContainer.insertAdjacentElement('beforeend', i)
    })
}


