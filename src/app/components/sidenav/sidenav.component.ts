import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  copyright: string = 'Made with <3 by eCloud';

  @Input() orchards: any;

  constructor() { }

  ngOnInit(): void {
  }

}
