const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaika = 'Ямайка';
const chinaCost = 150;
const chileCost = 250;
const australiaCost = 165;
const indiaCost = 90;
const jamaikaCost = 130;
let country = prompt('Укажите страну доставки:');
country = country.toLowerCase();
country = country[0].toUpperCase() + country.slice(1);

switch(country) {
    case china:
        alert(`Доставка в ${china} будет стоить ${chinaCost} кредитов`);
        break;
    case chile:
        alert(`Доставка в ${chile} будет стоить ${chileCost} кредитов`);
        break;
    case australia:
        alert(`Доставка в ${australia} будет стоить ${australiaCost} кредитов`);
        break;
    case india:
        alert(`Доставка в ${india} будет стоить ${indiaCost} кредитов`);
        break;
    case jamaika:
        alert(`Доставка в ${jamaika} будет стоить ${jamaikaCost} кредитов`);
        break;
    default:{
        alert('В вашей стране доставка не доступна, или в названии страны указана ошибка');
    }        
}