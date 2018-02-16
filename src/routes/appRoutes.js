const express = require('express');
const router = express.Router();
var Car = require('../models/dataSchema');

router.post('/create', (req, res, next) => {
    var newCar = new Car ({
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
    Car.findOneAndRemove({_id: req.params.id}, (err, car) => {
        if (err) {
            res.status(500).json({ errmsg: err });
        } else {
            res.status(200).json({ msg: car });
        }
    });
});

module.exports = router;

/*
router.get('/cars', (req, res, next) => {
    db.cars.find((err, cars) => {
        if (err) {
            return next(err);
        } else {
            res.json(cars);
        }
    });
});

router.get('/cars/:id', (req, res, next) => {
    db.cars.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, car) => {
        if (err) {
            return next(err);
        } else {
            res.json(car);
        }
    });
});

router.post('/create', (req, res, next) => {
    const car = req.body;
    if( !car.brand || !(car.idDone + '')) {
        res.status(400).json({
            error: 'Informe a marca'
        });
    } else {
        db.cars.save(car, (err, car) => {
            if(err) {
                return next(err);
            } else {
                res.json(car);
            }
        })
    }
});



router.delete('/delete/:id', (req, res, next) => {
    db.cars.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, result) => {
        if (err) {
            res.next(err);
        } else {
            res.json(result);
        }
    });
});

router.put('/update/:id', (req, res, next) => {
    const car = db.body;
    const updateCar = {};

    if (car.brand) {
        updateCar.brand = car.brand;
    }

    if (car.model) {
        updateCar.model = car.model;
    }

    if (car.color) {
        updateCar.color = car.color;
    }

    if (!updateCar) {
        res.status(400).json({
            error: 'Sem dados para atualizar.'
        });
    } else {
        db.cars.update({ _id: mongojs.ObjectId(req.params.id) }, updateCar, (err, car) => {
            if (err) {
                return next(err);
            } else {
                res.json(car);
            }
        });
    }
});
*/