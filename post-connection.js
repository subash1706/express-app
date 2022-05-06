const connection = require('express');
const bodyparser = require('body-parser');
const app = connection();
const port = 8000;
var patient = {};
const file = require('fs');
const { request } = require('http');
const { response } = require('express');
const { nextTick } = require('process');

var urlParser = bodyparser.urlencoded({ extended: false });
app.use(connection.static('public'));
app.get('/', function(request, response) {
    var data = file.readFileSync('patientlog.json');

    var patientobject = JSON.parse(data);
    console.log("From get functin", patientobject);
    exports.dataset = patientobject;

    response.sendFile(`${__dirname}/patientdata.html`);



});

app.post('/postquery', urlParser, function(request, response) {
    var fname = request.body.pname;
    var aadhar = request.body.aadhar;
    var age = request.body.age;
    var infection = request.body.infection;
    var address = request.body.address;
    var city = request.body.city;
    var state = request.body.state;
    var bg = request.body.blood;

    console.log(`${fname}   ${aadhar}`);
    patient = {
        pname: fname,
        aadharno: aadhar,
        Age: age,
        infection: infection,
        address: address,
        city: city,
        state: state,
        bg: bg,
    };

    var data = file.readFileSync('patientlog.json');

    var patientobject = JSON.parse(data);
    patientobject.push(patient);
    console.log(patientobject);

    file.writeFile('patientlog.json', JSON.stringify(patientobject), (err) => {

        if (err) throw err;

        console.log('Patient Data added successfully');
        patientobject = JSON.parse(data);

    });
    // response.end(JSON.stringify(patient));

    response.redirect('..');




});
app.get('/getdata', function(request, response) {
    var data = file.readFileSync('patientlog.json');

    var patientobject = JSON.parse(data);
    response.json(patientobject);





});
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on http://localhost:${port}`);
});

// module.exports.patientdata = patient;