import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Car } from 'app/Car';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    private cars: Car[];

    constructor(private carService: CarsService, private router: Router) { }

    ngOnInit() {
        this.getCars();
    }

    getCars() {
        this.carService.getCars()
            .subscribe((data) => {
                console.log(data);
                this.cars = data['msg'];
            },
                (err) => {
                    console.log(err);
                }
            );
    }

    updateCar(car) {
        this.carService.setter(car);
        this.router.navigate(['/api/createUpdate']);
    }

    deleteCar(car) {
        this.carService.deleteCar(car._id)
            .subscribe((data) => {
                this.cars.splice(this.cars.indexOf(car), 1);
            }),
            (error) => {
                console.log(error);
            }
    }
}
