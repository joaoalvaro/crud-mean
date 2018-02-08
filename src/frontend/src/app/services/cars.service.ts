import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Car } from '../Car';
import { HttpHeaders } from '@angular/common/http';

@Injectable()

export class CarsService {

    domain: string = 'http://localhost:3000';

    constructor(private http: HttpClient) { }


    getCars() {
        return this.http.get<Car[]>(`${this.domain}/api/cars`)
            .map(res => res);
    }

    addCars(newCar: Car) {
        return this.http.post<Car>(`${this.domain}/api/cars`, newCar)
            .map(res => res);
    }

    deleteCars(id) {
        return this.http.delete<Car>(`${this.domain}/api/cars/${id}`)
            .map(res => res);
    }

    updateCars(newCar) {
        return this.http.put<Car>(`${this.domain}/api/cars/${newCar._id}`, newCar)
            .map(res => res)
    }

}
