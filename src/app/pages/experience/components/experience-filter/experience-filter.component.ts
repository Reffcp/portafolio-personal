import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperiencieService } from 'src/app/core/service/experiencie.service';
import { IExperienceModel } from 'src/app/shared/models/experience.model';

@Component({
  selector: 'app-experience-filter',
  templateUrl: './experience-filter.component.html',
  styleUrls: ['./experience-filter.component.scss'],
})
export class ExperienceFilterComponent implements OnInit {
  typeExperience = '';
  typeExperienceTitle = '';
  experiences: IExperienceModel[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private experiencieService: ExperiencieService
  ) {}

  ngOnInit(): void {
    this.getParams();
  }

  getExperiencieFilter(filter: string) {
    this.experiencieService
      .getExperienceByFilter(filter)
      .subscribe((res: IExperienceModel[]) => {
        this.experiences = res.map((data) => {
          data.FECHA_INICIO = data.FECHA_INICIO.toDate();
          data.FECHA_FIN = data.FECHA_FIN.toDate();
          return data;
        });
      });
  }

  getParams(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      this.typeExperience = res.type;
      switch (res.type) {
        case 'profesional':
          this.typeExperienceTitle = 'Profesional';
          break;
        case 'freelancer':
          this.typeExperienceTitle = 'Freelancer';
          break;
        case 'consultoria':
          this.typeExperienceTitle = 'en Consultoría';
          break;

        default:
          break;
      }
      this.getExperiencieFilter(res.type);
    });
  }
}
