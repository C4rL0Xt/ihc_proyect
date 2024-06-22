import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesChartComponent } from './grades-chart.component';

describe('GradesChartComponent', () => {
  let component: GradesChartComponent;
  let fixture: ComponentFixture<GradesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradesChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
