import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmotionsComponent } from './prmotions.component';

describe('PrmotionsComponent', () => {
  let component: PrmotionsComponent;
  let fixture: ComponentFixture<PrmotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrmotionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
