import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { UploaderService } from 'src/app/services/uploader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  file: any = null;
  name: any = "";
  loading: boolean = false;

  constructor(private uploaderService: UploaderService, private fb: FormBuilder) {}
  
  ngOnInit(): void {}

  onUpload(event: any){
    this.file = event.target.files[0];
  }

  send(){
    this.loading = true;
    this.uploaderService.OnUpload(this.file, this.name).subscribe(
      (response) => {
        this.loading = false;
        this.file = null;
        this.name = null;
      },
      (error) => {
        console.error('Error al obtener datos:', error);
        this.loading = false;
      }
    );
  }

}