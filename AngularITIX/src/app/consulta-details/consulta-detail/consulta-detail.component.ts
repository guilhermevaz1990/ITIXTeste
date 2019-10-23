import { Component, OnInit } from '@angular/core';
import { ConsultaDetailService } from 'src/app/shared/consulta-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta-detail',
  templateUrl: './consulta-detail.component.html',
  styles: []
})
export class ConsultaDetailComponent implements OnInit {

  constructor(private service:ConsultaDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.service.formData ={
      Id : 0,
      Nome : '',
      DataNascimento : '',
      DataHoraInicial : '',
      DataHoraFinal : '',
      Obs : ''
    }
  }

  onSubmit(form:NgForm){
    if(form.value.Id==0){
      this.service.PostConsulta(form.value).subscribe(
        res => {
          this.resetForm(form);
          this.toastr.success('Registro inserido com sucesso!', 'Registro de consulta')
          this.service.refreshList();
        },
        err => {
          console.log(err)
        }
      )
    }
    else{
      this.service.PutConsulta(form.value).subscribe(
        res => {
          this.resetForm(form);
          this.toastr.info('Registro alterado com sucesso!', 'Registro de consulta')
          this.service.refreshList();
        },
        err => {
          console.log(err)
        }
      )
    }
  } 
}
