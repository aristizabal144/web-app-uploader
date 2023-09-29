import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(private http: HttpClient) { }

  OnUpload(file: any, name: string): Observable<any> {
    const formData: any = new FormData();
    formData.append("file", file, file?.name);
    formData.append("name", name);
    formData.append("bucket", 'uploader-bucket-prod');
    return this.http.post('http://3.92.176.93:3000/upload', formData);
  }

  getByDate(start: string , end: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('startDate', start);
    params = params.append('endDate', end.toString());
    return this.http.get('http://3.92.176.93:3000/upload', { params });
  }

  getByHour(start: string , end: string): Observable<any>{
    let params = new HttpParams();
    params = params.append('startDate', start);
    params = params.append('endDate', end.toString());
    return this.http.get('http://3.92.176.93:3000/upload/by-hour', { params });
  }
}