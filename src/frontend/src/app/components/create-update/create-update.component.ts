import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { Router } from '@angular/router';
import { Car } from 'app/Car';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

    private car: Car;

    constructor(private carsService: CarsService, private router: Router) { }

    ngOnInit() {
        this.car = this.carsService.getter();
    }

    createOrUpdate() {
        if (this.car._id == undefined) {
            this.carsService.addCar(this.car)
                .subscribe(data => {
                    console.log(data);
                    this.router.navigate(['/']);
                },
                    (error) => {
                        console.log(error);
                    }
                )
        } else {
            this.carsService.updateCar(this.car)
                .subscribe(data => {
                    console.log(data);
                    this.router.navigate(['/']);
                },
                    (error) => {
                        console.log(error);
                    }
                )
        }
    }
}
