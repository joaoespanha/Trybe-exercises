function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//   Exercicio 1   

function createDaysOfThemonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDayList = document.querySelector('#days');
  
  //Estrutura de repeticao para percorrer o Array de dias
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const daysNumbers = dezDaysList[index];
    const dayListItem = document.createElement('li');

    dayListItem.innerText = daysNumbers;
    
    // COndicional para saber se é feriado, sexta feira ou um dia normal
    if (dayListItem.innerText == 24 || dayListItem.innerText == 25 || dayListItem.innerText == 31) {
        dayListItem.className = 'day holiday';
    
    } else if (dayListItem.innerText == 4 || dayListItem.innerText == 11 || dayListItem.innerText == 18 || dayListItem.innerText == 25) {
        dayListItem.className = 'day friday';


    } else {
        dayListItem.className = 'day';

    }


    monthDayList.appendChild(dayListItem);

    }
  
}

  createDaysOfThemonth();

  const buttonContainer = document.querySelector('.buttons-container')

  function createButton (string) {
    
    const button = document.createElement('button');
    button.innerText = string;
    button.className = 'btn-holiday';


    buttonContainer.appendChild(button);

  }

  createButton('Feriados');
  // Exercicio 2
let buttonHolidays = document.querySelector('.btn-holiday');

const holidays = document.getElementsByClassName('holiday');
let isHolidaysClicked = false;

function changeColorOfHolidays  () {
  if (isHolidaysClicked == false){
    for(let day in holidays) {
      holidays[day].style.backgroundColor = 'grey';
      holidays[day].style.color = 'white'
      isHolidaysClicked = true;

    }

  } else {
    for(let day in holidays) {
      holidays[day].style.backgroundColor = 'rgb(238,238,238)';
      
      isHolidaysClicked = false;

    }
  
  console.log(holidays)
 
  }
}

 buttonHolidays.addEventListener('click', changeColorOfHolidays);
    
