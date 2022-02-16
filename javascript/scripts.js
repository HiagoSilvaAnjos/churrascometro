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
    const lengthAdult = getValueInputAdult.value;

    // Quantidade de adultos que não bebem
    const lengthAdultNotBeer = getValueInputAdultNotBeer.value;

    // Quantidade de adolescente
    const lengthAdolescent = getValueInputAdolescent.value;

    // Quantidade de Crianças
    const lengthKids = getValueInputKid.value;

    // Quantidade Horas
    const duarationEvent = getHoursDuration.value;

    // Calcular Quantidade de carne
    const totalGramsBeefPeople = beefPeople(duarationEvent);
    const sumAdultsAndAdolescents = parseInt(lengthAdult) + parseInt(lengthAdultNotBeer) + parseInt(lengthAdolescent);
    const sumKids = (totalGramsBeefPeople / 2) * lengthKids;
    const lengthTotalBeef = totalGramsBeefPeople * sumAdultsAndAdolescents + sumKids; 
    console.log(`Total carnes: ${lengthTotalBeef}`);

    //Calcular Quantidade de cerveja
    const totalLitersBeerPeople = beerPeople(duarationEvent);
    const totalBeerPeople = totalLitersBeerPeople * lengthAdult;
    console.log(`Total cerveja: ${totalBeerPeople}`);

    //Calcular Quantidade de bebidas
    const toralLitersDrinksPeople = drinksPeople(duarationEvent);
    const sumDrinksAdultsAndAdolecents = parseInt(lengthAdultNotBeer) + parseInt(lengthAdolescent);
    const sumDrinksKids = (toralLitersDrinksPeople / 2) * lengthKids;
    const totalDrinksPeople = toralLitersDrinksPeople * sumDrinksAdultsAndAdolecents + sumDrinksKids; 
    console.log(`Total bebidas: ${totalDrinksPeople}`);

    // Resultado
    resultChurrasElement.style.display = 'flex';
    resultChurrasElement.children[0].innerText = `${lengthTotalBeef / 1000} kg de Carnes`;
    resultChurrasElement.children[1].innerText = `${Math.ceil(totalBeerPeople / 355)} Latas de Cerveja`;
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

// Remover error input Adolescentes
const removeErrorAdolescent = (getValueInputAdolescent) => {

    let validateAdolescent = isValidInputAdolescent();

    if(validateAdolescent) {
        return getValueInputAdolescent.classList.remove('error');
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

getValueInputAdultNotBeer.addEventListener('change', () => removeErrorAdultNotBeer(getValueInputAdultNotBeer));

getValueInputAdolescent.addEventListener('change', () => removeErrorAdolescent(getValueInputAdolescent));

getValueInputKid.addEventListener('change', () => removeErrorKid(getValueInputKid));

getHoursDuration.addEventListener('change', () => removeErrorHours(getHoursDuration));

buttonStartCalc.addEventListener('click', () => calcChurras());