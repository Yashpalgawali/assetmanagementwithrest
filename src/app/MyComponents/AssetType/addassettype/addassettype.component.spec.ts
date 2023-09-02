import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassettypeComponent } from './addassettype.component';

describe('AddassettypeComponent', () => {
  let component: AddassettypeComponent;
  let fixture: ComponentFixture<AddassettypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassettypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddassettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
