let monney = +prompt('Ваш бюджет на месяц?' ,''),
    time = prompt('Введите дату в формате YYYY-MM-DD' ,'');




let appData = {
    buget: monney ,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


// for ( let i = 0; i < 2; i++ ) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
//         b = prompt('Во сколько обойдется?','');
//     if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//     appData.expenses[a] = b;
//     } else {

//     }
// };


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


let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце' ,''),
        b = prompt('Во сколько обойдется?','');
    if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50) {
            console.log('done');
            i++;
        appData.expenses[a] = b;
        } else {

        }
}
while(i < 2);

appData.monneyPerDay=appData.buget/30

    alert('Ежедневнный бюджет:' + appData.monneyPerDay );


if(appData.monneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.monneyPerDay > 100 && appData.monneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.monneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Пройзошла ошибка");
}