import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';
import { ConferenciaDetail } from '../conferencia-detail';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias: Array<Conferencia> = [];
  conferenciasPorVenirCount: number = 0;
  selected: boolean = false;
  selectedConferencia!: ConferenciaDetail;

  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias(): void {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      const currentDate = new Date();
      this.conferencias = conferencias.filter(conferencia => new Date(conferencia.starts) > currentDate);
      
      this.conferenciasPorVenirCount = this.conferencias.length;
    });
  }

  onSelected(conferencia: ConferenciaDetail): void {
    this.selected = true;
    this.selectedConferencia = conferencia;

    window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  ngOnInit() {
    this.getConferencias();
  }
}


