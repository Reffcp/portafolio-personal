import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStickComponent } from './social-stick.component';

describe('SocialStickComponent', () => {
  let component: SocialStickComponent;
  let fixture: ComponentFixture<SocialStickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialStickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialStickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
