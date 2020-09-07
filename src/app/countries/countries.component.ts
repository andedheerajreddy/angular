import { CountriesService } from './../countries.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries;
  constructor(private ds:CountriesService) { }
  ngOnInit(): void {
    this.ds.getUsers().subscribe(data=>{
     this.countries=data
    })
  }
 

}
