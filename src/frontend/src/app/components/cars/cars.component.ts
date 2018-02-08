import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service'

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

    constructor(private carService: CarsService) {
        this.carService.getCars().subscribe(cars => {
            console.log(cars);
        });
    }

    ngOnInit() {
    }

}
