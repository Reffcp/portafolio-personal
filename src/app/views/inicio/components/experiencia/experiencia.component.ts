import { Component, Input, OnInit } from '@angular/core';
import { IExperiencia } from 'src/app/core/models/experiencia.model';
import { ExperienciaService } from 'src/app/core/services/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
  @Input() tipoExperiencia = 'formal';

  public experiencias: IExperiencia[];
  constructor(private experienciaService: ExperienciaService) { }

  public ngOnInit() {
    this.experienciaService.getExperiencia(this.tipoExperiencia)
    .subscribe((res: IExperiencia[]) => {
      this.experiencias = res;
    });
  }

}
