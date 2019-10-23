import { Injectable } from '@angular/core';
import { ConsultaDetail } from './consulta-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultaDetailService {
  formData:ConsultaDetail;
  readonly URL = 'http://localhost:49782/api/';
  list : ConsultaDetail[];

  constructor(private http:HttpClient) { }

  PostConsulta(formData: ConsultaDetail){
    return this.http.post(this.URL+'/Consulta/', formData)
  }

  PutConsulta(formData: ConsultaDetail){
    return this.http.put(this.URL+'/Consulta/'+ formData.Id, formData)
  }
  DeleteConsulta(id){
    return this.http.delete(this.URL+'/Consulta/'+ id)
  }

  refreshList(){
    this.http.get(this.URL+'/Consulta')
    .toPromise()
    .then(res => this.list = res as ConsultaDetail[]);
  }
}
