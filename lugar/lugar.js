const axios = require('axios').default;

const getCityLatLng = async(city) => {

    city = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`,
        headers: { 'X-RapidAPI-Key': 'd8d78acf8amsh679bca7b3d240b0p1beaebjsn09b8b3367906' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ city }`);
    }

    console.log(resp.data);

    const data = resp.data;

    return {
        'direccion': data.name,
        'lat': data.coord.lat,
        'lng': data.coord.lon,
        'temp': data.main.temp
    }

}

module.exports = {
    getCityLatLng
}