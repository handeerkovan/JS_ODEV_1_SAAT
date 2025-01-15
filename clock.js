// İsim girme fonksiyonu
let hiName = prompt("Adınız nedir?");
let hiDOM = document.querySelector("#myName");

function hi() {
    if (!hiName || hiName.trim() === "") {
        hiName = "Misafir";
    }
    console.log(`Hoşgeldin ${hiName}`);
    hiDOM.innerHTML = hiName;
}
hi();

// Türkçe gün isimlerini içeren dizi
const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

// Saat fonksiyonu
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let day = daysOfWeek[today.getDay()]; // Bugünün gün ismini alıyoruz
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + day;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i; // 10'dan küçükse başına sıfır ekliyoruz
    }
    return i;
}

// Saat fonksiyonunu çağır
startTime();
