import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lakes',
  templateUrl: './main-lakes.component.html',
  styleUrls: ['./main-lakes.component.css']
})
export class MainLakesComponent implements OnInit {

  @Input() lake

  constructor() { }

  ngOnInit(): void {
  }

}
