import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewassetassignhistoryComponent } from './viewassetassignhistory.component';

describe('ViewassetassignhistoryComponent', () => {
  let component: ViewassetassignhistoryComponent;
  let fixture: ComponentFixture<ViewassetassignhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewassetassignhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewassetassignhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
