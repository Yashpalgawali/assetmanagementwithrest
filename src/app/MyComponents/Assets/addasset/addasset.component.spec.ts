import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassetComponent } from './addasset.component';

describe('AddassetComponent', () => {
  let component: AddassetComponent;
  let fixture: ComponentFixture<AddassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
