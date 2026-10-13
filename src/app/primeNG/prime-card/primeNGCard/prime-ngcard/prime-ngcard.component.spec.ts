import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNGCardComponent } from './prime-ngcard.component';

describe('PrimeNGCardComponent', () => {
  let component: PrimeNGCardComponent;
  let fixture: ComponentFixture<PrimeNGCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNGCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeNGCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
