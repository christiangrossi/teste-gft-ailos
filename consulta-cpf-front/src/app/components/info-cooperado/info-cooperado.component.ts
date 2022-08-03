import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cooperado',
  templateUrl: './info-cooperado.component.html',
  styleUrls: ['./info-cooperado.component.scss']
})
export class InfoCooperadoComponent implements OnInit {

  constructor() { }

  @Input() cooperado: any;
  ngOnInit(): void {
  }

}
