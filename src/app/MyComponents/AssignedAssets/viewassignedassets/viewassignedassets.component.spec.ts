import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassignedassetsComponent } from './viewassignedassets.component';

describe('ViewassignedassetsComponent', () => {
  let component: ViewassignedassetsComponent;
  let fixture: ComponentFixture<ViewassignedassetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewassignedassetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewassignedassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
