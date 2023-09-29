import { Component, Input } from '@angular/core';
import { HourRegister } from 'src/app/models/HourRegister.model';

@Component({
  selector: 'app-hour-register',
  templateUrl: './hour-register.component.html',
  styleUrls: ['./hour-register.component.scss']
})

export class HourRegisterComponent {
  @Input() dataSource: any;
  displayedColumns: string[] = ['Fecha', 'Cantidad'];
  clickedRows = new Set<HourRegister>();


  constructor() { }

  ngOnInit(): void {
  }
}
