const Status = require('http-status')
const fs = require('fs');

//APIs Comuns
var countStatus = 0;
exports.status = (request, response, next) => {

    var obj = readJSONFile('discovery-v1-status-ok');

    countStatus++;
    if(countStatus == 2){
        var obj = readJSONFile('discovery-v1-status-partial');
        countStatus = 0;
    }
    response.status(200).send(obj);
}

exports.outages = (request, response, next) => {
    var obj = readJSONFile('discovery-v1-outages-ok');
    response.status(200).send(obj);
}

//APIs Canais Atendimento
exports.channels_branches = (request, response, next) => {

    sleep(random(1000,3000)).then(() => {
        var obj = readJSONFile('channels-v1-branches-ok');
        response.status(200).send(obj);
    });
   
}
exports.channels_eletronic = (request, response, next) => {
    
    sleep(random(100,1000)).then(() => {
        var obj = readJSONFile('channels-v1-electronic-channels-ok');
        response.status(200).send(obj);
    });
}

exports.channels_phone = (request, response, next) => {
    var obj = readJSONFile('channels-v1-phone-channels-ok');
    response.status(200).send(obj);
}

exports.banking_agents = (request, response, next) => {
    var obj = readJSONFile('channels-v1-banking_agents-ok');
    response.status(200).send(obj);
}

exports.products_services_personal_acc = (request, response, next) => {
    var obj = readJSONFile('products-services-v1-personal-accounts-ok');
    response.status(200).send(obj);
}

exports.products_services_business_acc = (request, response, next) => {
    var obj = readJSONFile('products-services-v1-business-accounts-ok');
    response.status(200).send(obj);
}

exports.admin_metrics = (request, response, next) => {
    var obj = readJSONFile('admin-v1-metrics-ok');
    response.status(200).send(obj);
}

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

function random(low,high){
    return Math.random() * (high - low) + low;
}

function readJSONFile(fileName){
    var obj = JSON.parse(fs.readFileSync('./controllers/mocks/'+fileName+'.json', 'utf8'));
    return obj;
}