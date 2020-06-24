const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const city = argv.direction;

lugar.getCityLatLng(city)
    .then(resp => console.log(resp))
    .catch(err => console.log('err', err));