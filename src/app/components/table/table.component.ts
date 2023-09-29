import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/models/table.model';
import { UploaderService } from 'src/app/services/uploader.service';


const ELEMENT_DATA: Table[] = [];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})


export class TableComponent implements OnInit {
  displayedColumns: string[] = ['Fecha', 'Nombre', 'URL'];
  dataSource = ELEMENT_DATA;
  dataSourceHour = null;
  clickedRows = new Set<Table>();
  startDate: any = '';
  endDate: any  = '';


  constructor(private datePipe: DatePipe, private uploaderService: UploaderService) { }

  ngOnInit(): void {
  }

  onStartDateChange(event: any) {
    
    this.startDate = this.datePipe.transform(event.value, 'dd/MM/yyyy') ;
    console.log('Fecha de inicio cambiada:', this.startDate);
    
  }

  onEndDateChange(event: any) {
    this.endDate = this.datePipe.transform(event.value, 'dd/MM/yyyy');
    console.log('Fecha de fin cambiada:', this.endDate);
  }

  search(){
    this.uploaderService.getByDate(this.startDate, this.endDate).subscribe(
      (response) => {
        console.log(response);
        this.dataSource = response.data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );

    this.uploaderService.getByHour(this.startDate, this.endDate).subscribe(
      (response) => {
        console.log(response);
        this.dataSourceHour = response.data;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

}
