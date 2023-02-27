import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeargoogleComponent } from './seargoogle.component';

describe('SeargoogleComponent', () => {
  let component: SeargoogleComponent;
  let fixture: ComponentFixture<SeargoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeargoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeargoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
