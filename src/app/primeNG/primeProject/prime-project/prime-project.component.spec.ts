import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeProjectComponent } from './prime-project.component';

describe('PrimeProjectComponent', () => {
  let component: PrimeProjectComponent;
  let fixture: ComponentFixture<PrimeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
