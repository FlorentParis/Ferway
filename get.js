var datas;

function get(path, success, error) {

    var httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        alert('Abandon :( Impossible de créer une instance de XMLHTTP');
        return false;
    }
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status === 200){
                success(httpRequest.responseText);
            }else{
                error(httpRequest);
            }
        }
    };
    httpRequest.open('GET', path, true);
    httpRequest.send();
};

var getPost = function () {
    get("https://api-ratp.pierre-grimaud.fr/v4/stations/metros/8?way=A", function (response){
        datas = JSON.parse(response);
        setTimeout(() => {  list(datas['result']['stations']);}, 50);
    }, function(error) {
        console.log(error);
    })
}

getPost();

var shedules;

function getPostShedules(station) {
    get("https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/8/"+station+"/A+R", function (response){
        shedules = JSON.parse(response);
        doneSchedules(shedules['result']['schedules']);
    }, function(error) {
        console.log(error);
    })
}