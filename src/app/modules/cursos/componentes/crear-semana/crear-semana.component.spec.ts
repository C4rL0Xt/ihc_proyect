import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSemanaComponent } from './crear-semana.component';

describe('CrearSemanaComponent', () => {
  let component: CrearSemanaComponent;
  let fixture: ComponentFixture<CrearSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearSemanaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
