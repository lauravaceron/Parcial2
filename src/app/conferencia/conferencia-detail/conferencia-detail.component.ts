import { Component, Input, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaDetail } from '../conferencia-detail';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() conferenciaDetail!: ConferenciaDetail;
  constructor() { }

  ngOnInit() {
  }

}
