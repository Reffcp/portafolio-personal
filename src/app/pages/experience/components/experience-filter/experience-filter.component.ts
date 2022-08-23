import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-filter',
  templateUrl: './experience-filter.component.html',
  styleUrls: ['./experience-filter.component.scss'],
})
export class ExperienceFilterComponent implements OnInit {
  typeExperience = '';
  typeExperienceTitle = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
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
    });
  }
}
