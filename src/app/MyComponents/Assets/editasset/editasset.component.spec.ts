import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassetComponent } from './editasset.component';

describe('EditassetComponent', () => {
  let component: EditassetComponent;
  let fixture: ComponentFixture<EditassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
