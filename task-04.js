let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let droidNumber = prompt('Укажите количество дроидов, которое желаете купить:'); {
    if (droidNumber === null) {
        alert('Отменено пользователем!');
    }
    else {
        totalPrice = Number(droidNumber) * pricePerDroid;
        if (totalPrice > credits) {
            alert('Недостаточно средств на счету!');
        }
        else {
            let ost = credits - totalPrice;
            alert(`Вы купили ${droidNumber} дроидов, на счету осталось ${ost} кредитов.`);
        }
    }
}