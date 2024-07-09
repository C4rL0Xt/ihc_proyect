import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSemanaProfesorComponent } from './edit-semana-profesor.component';

describe('EditSemanaProfesorComponent', () => {
  let component: EditSemanaProfesorComponent;
  let fixture: ComponentFixture<EditSemanaProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSemanaProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSemanaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
