
//네이버 날씨 api 호출
function getWeather() {
    var url = "https://openweathermap.org/data/2.5/weather?q=Seoul&appid=b6907d289e10d714a6e88b30761fae22";
    var res = UrlFetchApp.fetch(url);
    var json = res.getContentText();
    var data = JSON.parse(json);

    console.log(data);
    return data;
}


