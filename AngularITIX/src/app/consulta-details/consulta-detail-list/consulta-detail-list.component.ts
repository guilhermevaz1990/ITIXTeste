import { Component, OnInit } from '@angular/core';
import { ConsultaDetailService } from 'src/app/shared/consulta-detail.service';
import { ConsultaDetail } from 'src/app/shared/consulta-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-consulta-detail-list',
  templateUrl: './consulta-detail-list.component.html',
  styles: []
})
export class ConsultaDetailListComponent implements OnInit {

  constructor(private service: ConsultaDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(cd: ConsultaDetail) {
    this.service.formData = Object.assign({}, cd);
    console.log(cd);
  }

  onDelete(Id) {
    if (confirm('Você tem certeza que deseja deletar?')) {

      this.service.DeleteConsulta(Id)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deletado com Sucesso!', 'Registro de consulta')
        },
          err => {
            console.log(err)
          })
    }
  }
}
