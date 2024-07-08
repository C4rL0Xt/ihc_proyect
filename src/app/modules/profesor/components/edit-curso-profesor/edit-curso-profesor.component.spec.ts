import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCursoProfesorComponent } from './edit-curso-profesor.component';

describe('EditCursoProfesorComponent', () => {
  let component: EditCursoProfesorComponent;
  let fixture: ComponentFixture<EditCursoProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCursoProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCursoProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
