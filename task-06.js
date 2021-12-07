let total = 0;
let num
for (let i =0; num !== NaN; i++){
    num = prompt('Введите число:');
    if(num === null){
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    num = Number(num);
    total += num;
}