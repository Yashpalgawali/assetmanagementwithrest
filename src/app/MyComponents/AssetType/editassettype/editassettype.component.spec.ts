import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassettypeComponent } from './editassettype.component';

describe('EditassettypeComponent', () => {
  let component: EditassettypeComponent;
  let fixture: ComponentFixture<EditassettypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditassettypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditassettypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
