var express = require('express');
var router = express.Router();
//panggil Model Satuanpendidikan
// var cekToken = require("../middleware");
var cekToken = require("../middleware");
var Satuanpendidikan = require('../models/SatuanPendidikan.js');

/* TAMPIL DATA */

router.get('/', cekToken, function(req, res, next) {
    Satuanpendidikan.findAll().then(data => {
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
    Satuanpendidikan.create(req.body).then(data => {
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
    Satuanpendidikan.update(req.body, {
        where: { kode_perguruan_tinggi: req.body.kode_perguruan_tinggi }
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
    Satuanpendidikan.destroy({
        where: { kode_perguruan_tinggi: req.body.kode_perguruan_tinggi }
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