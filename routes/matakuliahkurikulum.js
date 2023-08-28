var express = require('express');
var router = express.Router();

// var cekToken = require("../middleware");
var cekToken = require("../middleware");
//panggil Model Matakuliahkurikulum
var Matakuliahkurikulum = require('../models/MatakuliahKurikulum.js');

/* TAMPIL DATA */

router.get('/', cekToken, function(req, res, next) {
    Matakuliahkurikulum.findAll().then(data => {
        res.json({
            status: true,
            pesan: "Berhasil Tampil",
            data: data
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Tampil: " + err.message,
            data: []
        });
    });
});
/* TAMBAH DATA */
router.post('/', cekToken, function(req, res, next) {
    Matakuliahkurikulum.create(req.body).then(data => {
            res.json({
                status: true,
                pesan: "Berhasil Tambah",
                data: data
            });
        })
        .catch(err => {
            res.json({
                status: false,
                pesan: "Gagal Tambah: " + err.message,
                data: []
            });
        });
});
/* UBAH DATA */
router.put('/', cekToken, function(req, res, next) {
    Matakuliahkurikulum.update(req.body, {
        where: { id_mata_kuliah_kurikulum: req.body.id_mata_kuliah_kurikulum }
    }).then(() => {
        res.json({
            status: true,
            pesan: "Berhasil Ubah",
            data: []
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Ubah: " + err.message,
            data: []
        });
    });
});
/* HAPUS DATA */
router.delete('/', cekToken, function(req, res, next) {
    Matakuliahkurikulum.destroy({
        where: { id_mata_kuliah_kurikulum: req.body.id_mata_kuliah_kurikulum }
    }).then(() => {
        res.json({
            status: true,
            pesan: "Berhasil Hapus",
            data: []
        });
    }).catch(err => {
        res.json({
            status: false,
            pesan: "Gagal Hapus: " + err.message,
            data: []
        });
    });
});


module.exports = router;