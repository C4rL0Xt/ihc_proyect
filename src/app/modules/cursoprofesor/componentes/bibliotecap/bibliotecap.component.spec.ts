import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecapComponent } from './bibliotecap.component';

describe('BibliotecapComponent', () => {
  let component: BibliotecapComponent;
  let fixture: ComponentFixture<BibliotecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliotecapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibliotecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
