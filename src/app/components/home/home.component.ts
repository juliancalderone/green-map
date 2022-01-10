import { Component, OnInit } from '@angular/core';
import { orchards } from 'src/assets/orchards';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  orchards: any;

  constructor() {}

  getOrtchards() {
    this.orchards = orchards;
  }

  ngOnInit(): void {
    this.getOrtchards();
  }
}
