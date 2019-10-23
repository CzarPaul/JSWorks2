let monney, time;

function start() {
    monney = +prompt('Ваш бюджет на месяц?' ,'');
    time = prompt('Введите дату в формате YYYY-MM-DD' ,'');

    while (isNaN(monney) || monney == "" || monney == null){
        monney = +prompt('Ваш бюджет на месяц?' ,'');
    }
}
start();

let appData = {
    buget: monney ,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for ( let i = 0; i < 2; i++ ) {
        let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
            b = prompt('Во сколько обойдется?','');
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
        appData.expenses[a] = b;
        } else {
    
        }
    }
}
chooseExpenses();
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
//         b = prompt('Во сколько обойдется?','');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         i++;
//     appData.expenses[a] = b;
//     } else {

//     }
// };


// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
//         b = prompt('Во сколько обойдется?','');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             i++;
//         appData.expenses[a] = b;
//         } else {

//         }
// }
// while(i < 2);





function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget() {
    appData.monneyPerDay=(appData.buget/30).toFixed();
    alert('Ежедневнный бюджет:' + appData.monneyPerDay );

}
 
detectDayBudget();
function detectLevel() {
    if(appData.monneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.monneyPerDay > 100 && appData.monneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.monneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Пройзошла ошибка");
    }
}

function chooseOptExpenses() {
    for ( i=0; i<3; i++){
        opt = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = opt;
    }
}
chooseOptExpenses();