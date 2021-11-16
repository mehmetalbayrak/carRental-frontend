import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  dataLoaded:boolean=false;

  constructor(private httpClient:HttpClient,private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    return this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
  }
}
