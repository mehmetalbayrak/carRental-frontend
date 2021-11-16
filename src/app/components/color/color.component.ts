import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }
  color:Color[];
  currentColor:Color;

  ngOnInit(): void {
  }
  setCurrentColorClass(color:Color){
    if (color==this.currentColor) {
      return "list-group-active"
    }
    else{
      return "list-group"
    }
  }
}
