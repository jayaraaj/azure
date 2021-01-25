import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLabComponent } from './experience-lab.component';

describe('ExperienceLabComponent', () => {
  let component: ExperienceLabComponent;
  let fixture: ComponentFixture<ExperienceLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
