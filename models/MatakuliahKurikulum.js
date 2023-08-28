var koneksi = require('../koneksi');
const Sequelize = require('sequelize');
const Matakuliahkurikulum = koneksi.define('mata_kuliah_kurikulum', {
    id_mata_kuliah_kurikulum: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    id_kurikulum: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    kode_mata_kuliah: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    semester: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    apakah_wajib: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    id_neofedeer: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    freezeTableName: true
});
module.exports = Matakuliahkurikulum;