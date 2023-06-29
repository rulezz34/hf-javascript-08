// ne felejtsétek a bónusz házifeladatot: a sorting method (rendezési metódusok) közül nézzétek át a buborék-, minimumkiválasztásos- és beszúrórendezést

// adott a szokásos teams tömb
// !! sort !!
// // 1. Az összes csapaton belül rakd sorba a játékosokat név szerint
for (let i = 0; i < teams.length; i++) {
    teams[i].players.sort((playerA, playerB) => {
        return playerA.name < playerB.name ? -1 : +1;
    });
}

console.log(teams);

// // 2. Rakd sorba a csapatokat azok pontszámai alapján csökkenő sorrendbe

for (let i = 0; i < teams.length; i++) {
    let sum = 0;
    for (let j = 0; j < teams[i].players.length; j++) {
        sum = teams[i].players[j].score + sum;
    }
    teams[i].score = sum;
}

console.log(teams);


teams.sort((teamA, teamB) => {
    return teamA.score > teamB.score ? -1 : +1;
})
console.log(teams);

// // 3. Irasd ki a 3 legjobb játékost


// !! IIFE/module/closure !!

// // 4. Írj egy IIFE-t, ami bekér egy számot 0-10 között és annyi div-et generál
//   bele a dokumentum törzsébe. Ha nem megfelelő számot írt be a user, akkor vedd 5-nek

// // 5. Írj egy modularizált objektumot, aminek van egy privát tagja '_scaleRate' néven,
//     egy publikus 'scale' és egy publikus 'recalculate' metódusa.
//     A _scaleRate-nek az objektum létrehozásánál adj egy random értéket 1-3 között
//     (nem kell egész számnak lennie)
//     A scale metódusa paraméterül várjon egy számot és adja vissza a
//     _scaleRate és a paraméterül kapott szám szorzatát
//     A recalculate paraméter nélküli metódusa generálja újra a
//     _scaleRate értékét (1-3 között nem egész szám)

// !! events !!

// // 6. Írj egy html-t, melynél a document-re rakj rá egy click eseménykezelőt,
//       ami ki console.log-ozza az x és y koordinátáit a kattintásnak

document.addEventListener("mousemove", function (mousemovement) {
    const mouseX = mousemovement.clientX;
    const mouseY = mousemovement.clientY;

    console.log("X tengely: " + mouseX + "  Y tengely: " + mouseY);
})

// // 7. írj egy html fájlt, amibe van egy <p> tag némi szöveggel és egy gomb,
//       és a gomb lenyomására tűnjön el / jöjjön elő a <p> tag

const btn = document.querySelector("#button");
const pTag = document.querySelector("p");

console.log(pTag, btn);

btn.addEventListener('click', function () {
    if (pTag.style.display === 'none') {
        pTag.style.display = '';
    } else {
        pTag.style.display = 'none';
    }
});

// // 8. Írj egy html fájlt, amibe hozz létre 2 szám input mezőt + 1 gombot
//       + 1 <output> tag-et, a gomb lenyomására adjuk össze a kettőt és irassuk az <output> tag-be

const addBtn = document.getElementById('addBtn');
let number1Input = document.getElementById('number1');
let number2Input = document.getElementById('number2');
let resultOutput = document.getElementById('result');

addBtn.addEventListener('click', function () {
    const number1 = Number(number1Input.value);
    const number2 = Number(number2Input.value);
    const sum = number1 + number2;
    resultOutput.textContent = 'Eredmény: ' + sum;
});

// // 9. Írj egy html fájlt, amibe hozz létre 2 szám input mezőt, 1 select-et operátornak (+-/*),
//       és egy <output> tag-et. Ha változik vmelyik input mezőnek az értéke vagy a select-ben
//       kiválasztott opció azonnal írja ki egy <output> tag-be az eredményt,
//       a select kezdeti értéke legyen a + operátor
//       az input-ok kezdeti értéke legyen 1

//       ------ index2.js --------

// 10. Írj egy html fájlt, amiben van egy input mező - ami egy számot vár - és egy gomb.
//         a gomb lenyomására generálj le egy táblázatot, ami a szorzótáblázatot tartalmazza
//         a megadott számig (szúrd is be a dokumentumba)
//         Ha a gombot újra lenyomja a user, akkor az előző táblázatot töröld, és generáld le az újat