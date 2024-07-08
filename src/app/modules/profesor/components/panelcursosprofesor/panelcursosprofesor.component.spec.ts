import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcursosprofesorComponent } from './panelcursosprofesor.component';

describe('PanelcursosprofesorComponent', () => {
  let component: PanelcursosprofesorComponent;
  let fixture: ComponentFixture<PanelcursosprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelcursosprofesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelcursosprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
