const router = require('express').Router();
const mongojs = require('mongojs');

const db = mongojs('crud-mean-db', ['cars']);

router.get('/', (req, res, next) => {
    res.render('index.html');
});

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
    db.cars.findOne({ _id:  mongojs.ObjectId( req.params.id ) }, (err, car) => {
        if (err) {
            return next(err);
        } else {
            res.json(car);
        }
    });
});

router.post('/cars', (req, res, next) => {
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

router.delete('/cars/:id', (req, res, next) => {
    db.cars.remove({ _id: mongojs.ObjectId( req.params.id )}, (err, result) => {
        if(err) {
            res.next(err);
        } else {
            res.json(result);
        }
    });
});

router.put('/cars/:id', (req, res, next) => {
    const car = db.body;
    const updateCar = {};

    if(car.brand) {
        updateCar.brand = car.brand;
    }

    if(car.model) {
        updateCar.model = car.model;
    }

    if(car.color) {
        updateCar.color = car.color;
    }

    if (!updateCar) {
        res.status(400).json({
            error: 'Sem dados para atualizar.'
        });
    } else {
        db.cars.update({ _id: mongojs.ObjectId(req.params.id)}, updateCar, (err, car) => {
            if(err) {
                return next(err);
            } else {
                res.json(car);
            }
        });
    }

    
});




module.exports = router;