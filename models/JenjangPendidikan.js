var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Jenj_didik = koneksi.define('jenjangpendidikan', {
    id_jenj_didik: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nama_jenj_didik: {
        type: Sequelize.STRING,
        allowNull: false
    },



}, {
    freezeTableName: true
});
module.exports = Jenj_didik;