const getValueInputAdult = document.querySelector('.input-adults-value');
const getValueInputAdultNotBeer = document.querySelector('.input-adults-value-notBeer');
const getValueInputAdolescent = document.querySelector('.input-adolescent-value');
const getValueInputKid = document.querySelector('.input-kids-value');
const getHoursDuration = document.querySelector('.input-duration');
const buttonStartCalc = document.querySelector('.button-calc');
const resultChurrasElement = document.querySelector('.result-churras');

// Validação dos inputs
const isValidInputAdult = () => getValueInputAdult.value.trim().length > 0;
const isValidInputAdultNotBeer = () => getValueInputAdultNotBeer.value.trim().length > 0;
const isValidInputAdolescent = () => getValueInputAdolescent.value.trim().length > 0;
const isValidInputKid = () => getValueInputKid.value.trim().length > 0;
const isValidInputHours = () => getHoursDuration.value.trim().length > 0;

// Calcular churrasco
const calcChurras = () => {

    let validateAdult = isValidInputAdult();
    let validateAdultNotBeer = isValidInputAdultNotBeer();
    let validateAdolescent = isValidInputAdolescent();
    let validateKid = isValidInputKid();
    let validateHours = isValidInputHours();

    const validateInputs = validateAdult || validateAdultNotBeer || validateAdolescent || validateKid || validateHours;

    console.log(`Adulto:${validateAdult} Adulto que não bebe: ${validateAdultNotBeer} Adolescente: ${validateAdolescent} Criança:${validateKid} Horas:${validateHours}`)

    // Se todos os inputs etiverem vazios
    if (!validateInputs) {
        getValueInputAdult.classList.add('error');
        getValueInputAdultNotBeer.classList.add('error');
        getValueInputAdolescent.classList.add('error');
        getValueInputKid.classList.add('error');
        getHoursDuration.classList.add('error');
        resultChurrasElement.style.display = 'none';
    }

    // Se algum dos inputs tiverem vazios
    if (!validateAdult) {
        resultChurrasElement.style.display = 'none';
        return getValueInputAdult.classList.add('error');
    } 

    if(!validateAdultNotBeer) {
        resultChurrasElement.style.display = 'none';
        return getValueInputAdultNotBeer.classList.add('error');
    }

    if(!validateAdolescent) {
        resultChurrasElement.style.display = 'none';
        return getValueInputAdolescent.classList.add('error');
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

    resultChurrasElement.children[0].innerText = `${lengthTotalBeef / 1000} kg de Carne`;
    resultChurrasElement.children[1].innerText = `${Math.ceil(totalBeerPeople / 355)} Latas de cerveja`;
    resultChurrasElement.children[2].innerText = `${Math.ceil(totalDrinksPeople / 2000)} Garrafas de Bebidas`;

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
        return 2000;
    } else {
        return 1200;
    }
}

// Função que calcula a quantidade de bebidas(refrigerante-agua) por pessoa
const drinksPeople = (duarationEvent) => {
    if (duarationEvent >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

// Remover error input Adultos
const removeErrorAdult = (getValueInputAdult) => {

    let validateAdult = isValidInputAdult();

    if (validateAdult) {
        return getValueInputAdult.classList.remove('error');
    }
}

// Remover error input Adultos que não bebem
const removeErrorAdultNotBeer = (getValueInputAdultNotBeer) => {

    let validateAdultNotBeer = isValidInputAdultNotBeer();

    if(validateAdultNotBeer) {
        return getValueInputAdultNotBeer.classList.remove('error');
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