const getValueInputAdult = document.querySelector('.input-adults-value');
const getValueInputKid = document.querySelector('.input-kids-value');
const getHoursDuration = document.querySelector('.input-duration');
const buttonStartCalc = document.querySelector('.button-calc');
const resultChurrasElement = document.querySelector('.result-churras');

// Validação dos inputs
const isValidInputAdult = () => getValueInputAdult.value.trim().length > 0;
const isValidInputKid = () => getValueInputKid.value.trim().length > 0;
const isValidInputHours = () => getHoursDuration.value.trim().length > 0;

const calcChurras = () => {

    let validateAdult = isValidInputAdult();
    let validateKid = isValidInputKid();
    let validateHours = isValidInputHours();

    const validateInputs = validateAdult || validateKid || validateHours;

    console.log(`Adulto:${validateAdult} Criança:${validateKid} Horas:${validateHours}`)

    // Se todos os inputs etiverem vazios
    if (!validateInputs) {
        getValueInputAdult.classList.add('error');
        getValueInputKid.classList.add('error');
        getHoursDuration.classList.add('error');
        resultChurrasElement.style.display = 'none';
    }

    // Se algum dos inputs tiverem vazios
    if (!validateAdult) {
        resultChurrasElement.style.display = 'none';
        return getValueInputAdult.classList.add('error');
    } 

    if (!validateKid) {
        resultChurrasElement.style.display = 'none';
        return getValueInputKid.classList.add('error');
    }

    if (!validateHours) {
        resultChurrasElement.style.display = 'none';
       return getHoursDuration.classList.add('error');
    }

    // Quantidade de adultos
    let lengthAdult = getValueInputAdult.value;

    // Quantidade de Crianças
    let lengthKids = getValueInputKid.value;

    // Quantidade Horas
    let duarationEvent = getHoursDuration.value;

    // Calcular Quantidade de carne
    let totalGramsBeefPeople = beefPeople(duarationEvent);

    let lengthTotalBeef = totalGramsBeefPeople * lengthAdult + ((totalGramsBeefPeople / 2) * lengthKids); 
    console.log(`Total carnes: ${lengthTotalBeef}`)  ;

    //Calcular Quantidade de cerveja
    let totalLitersBeerPeople = beerPeople(duarationEvent);
    
    let totalBeerPeople = totalLitersBeerPeople * lengthAdult;
    console.log(`Total cerveja: ${totalBeerPeople}`);

    //Calcular Quantidade de bebidas
    let toralLitersDrinksPeople = drinksPeople(duarationEvent);

    let totalDrinksPeople = toralLitersDrinksPeople * lengthAdult + ((toralLitersDrinksPeople / 2) * lengthKids); 
    console.log(`Total bebidas: ${totalDrinksPeople}`);

    // Resultado
    resultChurrasElement.style.display = 'flex';

    resultChurrasElement.children[0].innerText = `${lengthTotalBeef}g de Carne`;
    resultChurrasElement.children[1].innerText = `${totalBeerPeople}ml de Cerveja`;
    resultChurrasElement.children[2].innerText = `${totalDrinksPeople}ml de Bebidas`;

}   

// Função que calcula a quantidade de carne por pessoa
const beefPeople = (duartionEvent) => {
    if (duartionEvent >= 6) {
        return 650;
    } else {
        return 400;
    }
}

// Função que calcula a quantidade de carne por pessoa
const beerPeople = (duartionEvent) => {
    if (duartionEvent >= 6) {
        return 2500;
    } else {
        return 1500;
    }
}

// Função que calcula a quantidade de bebidas(refrigerante-agua) por pessoa
const drinksPeople = (duarationEvent) => {
    if (duarationEvent >= 6) {
        return 1400;
    } else {
        return 800;
    }
}

// Remover error input Adultos
const removeErrorAdult = (getValueInputAdult) => {

    let validateAdult = isValidInputAdult();

    if (validateAdult) {
        return getValueInputAdult.classList.remove('error');
    }
}

// Remover error input Crianças
const removeErrorKid = (getValueInputKid) => {

    let validateKid = isValidInputKid();

    if (validateKid) {
        getValueInputKid.classList.remove('error');
    }

}

// Remover error input Duração
const removeErrorHours = (getHoursDuration) => {

    let validateHours = isValidInputHours();

    if (validateHours) {
        getHoursDuration.classList.remove('error');
    }

}


getValueInputAdult.addEventListener('change', () => removeErrorAdult(getValueInputAdult));

getValueInputKid.addEventListener('change', () => removeErrorKid(getValueInputKid));

getHoursDuration.addEventListener('change', () => removeErrorHours(getHoursDuration));

buttonStartCalc.addEventListener('click', () => calcChurras());