import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageProfesorComponent } from './main-page-profesor.component';

describe('MainPageProfesorComponent', () => {
  let component: MainPageProfesorComponent;
  let fixture: ComponentFixture<MainPageProfesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageProfesorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
