import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

    public drivers: Driver[];
    public newDriver: Driver = {id: null, truckNo:'', driverName: '', locationCode: null};
  
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  
    }
    async ngOnInit() {
        this.drivers = await this.http.get<Driver[]>(this.baseUrl + 'drivers').toPromise();
    }
    async save() {
      console.log(this.newDriver);
        await this.http.post<Driver[]>(this.baseUrl + 'drivers', this.newDriver).toPromise();
        this.drivers = await this.http.get<Driver[]>(this.baseUrl + 'drivers').toPromise();
    }
  
  
  }
  
  interface Driver {
    id: number;
    truckNo: string;
    driverName: string;
    locationCode: number;
   //image: img;
  }