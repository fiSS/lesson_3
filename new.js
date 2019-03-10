'use strict';
let money, time;
function start (){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
//isNaN возвращаент true когда туда попадают не цифры
    while (isNaN(money) || money == "" || money ==null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    Budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true             
};

 function chooseExpenses() {
         for (let i = 0; i < 2; i++) {
                    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
        
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) { 
                    console.log('done');
                    appData.expenses[a] = b;
        } else {
                 i--;
                 console.log (i);
                }
       }
}
chooseExpenses();

//toFixed убирает большое колличество чисел после запятой 0 до ближайшего целого, 1 до первого значение после запятой и он возвращает строковое значение
appData.moneyPerDay = (appData.Budget / 30).toFixed(1);

alert ("ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel(){
         if (appData.moneyPerDay < 100) {
                        console.log('минимальный уровень достатка');
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                        console.log('средний уровень достатка');
                } else if (appData.moneyPerDay > 2000) {
                        console.log('высокий уровень достатка');
                } else {
                        console.log("произошла ошибка");
                }     
}
detectLevel();

//расчёт дохода в месяц с вашего депозита
// function monthIncome(){
//         if (appData.saving == true) {
//              let save = +prompt('какова сумма накоплений?'),
//                  percent = +prompt('под какой процент?');  
//              appData.monthIncome = save/100/12*percent;
//              alert ('доход в месяц с вашего депозита:' + appData.monthIncome);   
             
//         }  
//   }
//   monthIncome();

//расчет дохода в день с вашего депозита
function detectDayBudget(){
        if (appData.saving == true) {
             let save = +prompt('какова сумма накоплений?'),
                 percent = +prompt('под какой процент?');  
                       appData.detectDayBudget = save/100/365*percent;
          alert ('доход в день с вашего депозита: ' + appData.detectDayBudget);
        }  
  }
  detectDayBudget();

function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
                   let a = prompt('Статья необязательных расходов?', ''),
                       b = prompt('Во сколько обойдется?', '');
       
           if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
           && a != '' && b != '' && a.length < 50) { 
                   console.log('done');
                   appData.optionalExpenses = ("a", "-", "b");
       } else {
                i--;
                console.log (i);
               }
      }
}
