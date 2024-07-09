import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaterialProfesorComponent } from './edit-material-profesor.component';

describe('EditMaterialProfesorComponent', () => {
  let component: EditMaterialProfesorComponent;
  let fixture: ComponentFixture<EditMaterialProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMaterialProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMaterialProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
