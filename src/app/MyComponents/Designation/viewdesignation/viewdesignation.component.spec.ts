import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdesignationComponent } from './viewdesignation.component';

describe('ViewdesignationComponent', () => {
  let component: ViewdesignationComponent;
  let fixture: ComponentFixture<ViewdesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
