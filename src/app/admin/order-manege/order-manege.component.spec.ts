import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManegeComponent } from './order-manege.component';

describe('OrderManegeComponent', () => {
  let component: OrderManegeComponent;
  let fixture: ComponentFixture<OrderManegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderManegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderManegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
