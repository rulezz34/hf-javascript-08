// // 9. Írj egy html fájlt, amibe hozz létre 2 szám input mezőt, 1 select-et operátornak (+-/*),
//       és egy <output> tag-et. Ha változik vmelyik input mezőnek az értéke vagy a select-ben
//       kiválasztott opció azonnal írja ki egy <output> tag-be az eredményt,
//       a select kezdeti értéke legyen a + operátor
//       az input-ok kezdeti értéke legyen 1

let number1Input = document.getElementById('number1');
let number2Input = document.getElementById('number2');
let operatorSelect = document.getElementById('operator');
let resultOutput = document.getElementById('result');

function calculator() {
    let number1 = Number(number1Input.value);
    let number2 = Number(number2Input.value);
    let operator = operatorSelect.value;
    let result;

    if (operator === '+') {
        result = number1 + number2;
    } else if (operator === '-') {
        result = number1 - number2;
    } else if (operator === '*') {
        result = number1 * number2;
    } else if (operator === '/') {
        result = number1 / number2;
    }

    resultOutput.innerText = 'Eredmény: ' + result;
}

number1Input.addEventListener('input', calculator);
number2Input.addEventListener('input', calculator);
operatorSelect.addEventListener('change', calculator);

calculator();


// 10. Írj egy html fájlt, amiben van egy input mező - ami egy számot vár - és egy gomb.
//         a gomb lenyomására generálj le egy táblázatot, ami a szorzótáblázatot tartalmazza
//         a megadott számig (szúrd is be a dokumentumba)
//         Ha a gombot újra lenyomja a user, akkor az előző táblázatot töröld, és generáld le az újat