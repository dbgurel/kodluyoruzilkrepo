let userName= prompt('Lütfen isminizi giriniz: ');
let name = document.querySelector('#myName');
name.innerHTML = userName;

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();

    switch(day){
        case 0:
            day = "Pazartesi";
            break;
        case 1:
            day = "Salı";
            break;
        case 2:
            day = "Çarşamba";
            break;
        case 3:
            day = "Perşembe";
            break;
        case 4:
            day = "Cuma";
            break;
        case 5:
            day = "Cumartesi";
            break;
        case 6:
            day = "Pazar";
            break;
    }

    let time = hour + ":" + min + ":" + sec + " " + day;
    document.querySelector("#myClock").innerHTML = time;

    setTimeout(showTime, 1000);

}
showTime();