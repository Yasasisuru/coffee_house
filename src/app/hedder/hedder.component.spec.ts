import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HedderComponent } from './hedder.component';

describe('HedderComponent', () => {
  let component: HedderComponent;
  let fixture: ComponentFixture<HedderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HedderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
