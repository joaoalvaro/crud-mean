const express = require('express');
const router = express.Router();
const Car = require('../models/dataSchema');


router.post('/create', (req, res, next) => {
    const newCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color
    });
    newCar.save((err, car) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: car });
        }
    });

});

router.get('/read', (req, res, next) => {
    Car.find({}, (err, cars) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: cars });
        }
    });
});

router.put('/update', (req, res, next) => {
    Car.findById(req.body._id, (err, car) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        }
        car.brand = req.body.brand;
        car.model = req.body.model;
        car.color = req.body.color;
        car.save((err, car) => {
            if (err) {
                res.status(500).json({ errmsg: err });
            } else {
                res.status(200).json({ msg: car });
            }
        });
    });
});

router.delete('/delete/:id', (req, res, next) => {
    Car.findOneAndRemove({ _id: req.params.id }, (err, car) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: car });
        }
    });
});

module.exports = router;