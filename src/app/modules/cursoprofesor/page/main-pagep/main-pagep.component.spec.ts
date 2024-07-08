import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagepComponent } from './main-pagep.component';

describe('MainPagepComponent', () => {
  let component: MainPagepComponent;
  let fixture: ComponentFixture<MainPagepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPagepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPagepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
