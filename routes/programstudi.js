var express = require('express');
var router = express.Router();
var cekToken = require("../middleware");
//panggil Model program_studi

var program_studi = require('../models/ProgramStudi.js');

/* TAMPIL DATA */

router.get('/', cekToken, function(req, res, next) {
    program_studi.findAll().then(data => {
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
    program_studi.create(req.body).then(data => {
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
    program_studi.update(req.body, {
        where: { id_program_studi: req.body.id_program_studi }
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
    program_studi.destroy({
        where: { id_program_studi: req.body.id_program_studi }
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