import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'app/Car';
import { CarsService } from '../../services/cars.service';
import { ListComponent } from '../list/list.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router, private carService: CarsService) { }

    ngOnInit() {
    }

    addCar(event) {
        event.preventDefault();
        this.carService.setter(new Car());
        this.router.navigate(['/api/createUpdate']);
    }
}
