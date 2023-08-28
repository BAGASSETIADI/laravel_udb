var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Satuanpendidikan = koneksi.define('satuan_pendidikan', {
    kode_perguruan_tinggi: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nama_perguruan_tinggi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_neofeeder: {
        type: Sequelize.STRING,
        allowNull: false,

    },
}, {
    freezeTableName: true
});
module.exports = Satuanpendidikan;