//requires
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

const getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let grados = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return (`El clima de ${coordenadas.direc} es de ${grados}C° centigrados`);
    } catch (error) {
        return (`No se pudo determinar el clima de ${direccion}`);
    }
};

getInfo(argv.direccion).then(console.log).catch(console.log);