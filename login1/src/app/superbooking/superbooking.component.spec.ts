import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperbookingComponent } from './superbooking.component';

describe('SuperbookingComponent', () => {
  let component: SuperbookingComponent;
  let fixture: ComponentFixture<SuperbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
