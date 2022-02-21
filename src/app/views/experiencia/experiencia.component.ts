import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExperiencia } from 'src/app/core/models/experiencia.model';
import { ExperienciaService } from 'src/app/core/services/experiencia/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
  public experiencias: IExperiencia[];
  constructor(
    private experienciaService: ExperienciaService,
    private actRoute: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      const tipoExperiencia = params['tipoExperiencia'];
      this.getExperienciaByTipo(tipoExperiencia);
    });
  }

  // use to obtain experience by tipe of experience
  getExperienciaByTipo(tipoExperiencia: string) {
    switch (tipoExperiencia) {
      case 'formal':
        this.getExperieciaFormal();
        break;

      case 'asesorias':
        this.getAsesorias();
        break;

      default:
        break;
    }
  }

  getExperieciaFormal() {
    this.experienciaService
      .getExperiencia()
      .subscribe((res: IExperiencia[]) => {
        this.experiencias = res;
      });
  }

  getAsesorias() {
    this.experienciaService.getAsesorias().subscribe((res: IExperiencia[]) => {
      this.experiencias = res;
    });
  }
}
