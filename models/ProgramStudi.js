var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Programstudi = koneksi.define('program_studi', {
    kode_prodi: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nama_prodi: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_jenj_didik: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    id_neofeder: {
        type: Sequelize.STRING,
        allowNull: false,

    },

}, {
    freezeTableName: true
});
module.exports = Programstudi;