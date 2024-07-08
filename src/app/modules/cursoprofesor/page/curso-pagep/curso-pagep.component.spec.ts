import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPagepComponent } from './curso-pagep.component';

describe('CursoPagepComponent', () => {
  let component: CursoPagepComponent;
  let fixture: ComponentFixture<CursoPagepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoPagepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoPagepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
