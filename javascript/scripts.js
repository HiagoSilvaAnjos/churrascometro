const getValueInputAdult = document.querySelector('.input-adults-value');
const getValueInputkid = document.querySelector('.input-kids-value');
const getHoursDuration = document.querySelector('.input-duration');
const buttonStartCalc = document.querySelector('.button-calc');

const isValidInputAdult = () => getValueInputAdult.value.trim().length > 0;
const isValidInputKid = () => getValueInputkid.value.trim().length > 0;
const isValidInputHours = () => getHoursDuration.value.trim().length > 0;



const calcChurras = () => {

    let validateAdult = isValidInputAdult();
    let validateKid = isValidInputKid();
    let validateHours = isValidInputHours();

    const validateInputs = validateAdult || validateKid || validateHours;

    console.log(`Adulto:${validateAdult} Criança:${validateKid} Horas:${validateHours}`)

    if (!validateInputs) {
        getValueInputAdult.classList.add('error');
        getValueInputkid.classList.add('error');
        getHoursDuration.classList.add('error');
    }

    if (!validateAdult) {
        return getValueInputAdult.classList.add('error');
    }

    if (!validateKid) {
        getValueInputkid.classList.add('error');
    }

    if (!validateHours) {
        getHoursDuration.classList.add('error');
    }

    alert("Tudo certo");

}   

const removeErrorAdult = () => {

    let validateAdult = isValidInputAdult();

    if (validateAdult) {
        return getValueInputAdult.classList.remove('error');
    }
}

const removeErrorKid = () => {

    let validateKid = isValidInputKid();

    if (validateKid) {
        getValueInputkid.classList.remove('error');
    }

}

const removeErrorHours = () => {

    let validateHours = isValidInputHours();

    if (validateHours) {
        getHoursDuration.classList.remove('error');
    }

}


getValueInputAdult.addEventListener('change', () => removeErrorAdult());
getValueInputkid.addEventListener('change', () => removeErrorKid());
getHoursDuration.addEventListener('change', () => removeErrorHours());

buttonStartCalc.addEventListener('click', () => calcChurras());
