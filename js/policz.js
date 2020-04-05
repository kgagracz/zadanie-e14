const script = () => {
    
    console.log('click')
    let ilosc = document.getElementById('ilosc').value;
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let submit;
    if (first.checked == true) {
        console.log('checked');
        submit = ilosc * 70
    } 
    if (second.checked == true) {
        console.log('checked');
        submit = ilosc * 80
    }
    if (submit == undefined) submit = 'wybierz opcje';
    newP.innerText = 'Koszt kafelkowania: ' +submit; 
} 

document.getElementById('activate').addEventListener('click', script);
let newP = document.createElement('p');
    newP.setAttribute('id', 'added')
    document.body.appendChild(newP);


// //Skrypt 
// Przykład działania skryptu przedstawiony jest na obrazie 2. Skrypt powinien działać po stronie przeglądarki. Jego zadaniem jest obliczenie ceny kafelkowania, uwzględniając wytyczne:
// - Cena usługi dla 1 m2 kafelków 20 x 20 cm wynosi 70 zł
// - Cena usługi dla 1 m2 kafelków 25 x 12 cm wynosi 80 zł
// Działanie skryptu: 
// - Skrypt pobiera dane z pola edycyjnego oraz sprawdza, które pole typu radio zostało wybrane
// - Na podstawie danych oblicza koszt kafelkowania i wypisuje poniżej według wzoru „Koszt kafelkowania: ” <obliczony koszt> zł 
// UWAGA: po zakończeniu pracy nagraj płytę z rezultatami pracy. W folderze z Twoim numerem PESEL powinny się znajdować pliki: adres.html, index.html, logotyp.png, policz.html, remont.css, zrzut1.jpg, ewentualnie inne przygotowane przez Ciebie pliki. Po nagraniu płyty sprawdź poprawność nagrania i opisz płytę swoim numerem PESEL.  