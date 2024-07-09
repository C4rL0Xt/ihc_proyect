import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTareaProfesorComponent } from './edit-tarea-profesor.component';

describe('EditTareaProfesorComponent', () => {
  let component: EditTareaProfesorComponent;
  let fixture: ComponentFixture<EditTareaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTareaProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTareaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
