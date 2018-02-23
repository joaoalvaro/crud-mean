import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Car } from '../Car';

@Injectable()

export class CarsService {
    private car: Car;
    private baseUrl: string = 'http://localhost:3000';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }


    addCar(newCar: Car) {
        return this.http.post(`${this.baseUrl}/create`, newCar, {headers: this.headers});
    }

    getCars() {
        return this.http.get(`${this.baseUrl}/read`, {headers: this.headers});
    }

    updateCar(newCar: Car) {
        return this.http.put(`${this.baseUrl}/update/`, newCar, {headers: this.headers});
    }

    deleteCar(id: string) {
        return this.http.delete(`${this.baseUrl}/delete/${id}`, {headers: this.headers});
    }

    setter(car: Car) {
        this.car = car;
    }

    getter() {
        return this.car;
    }
}
