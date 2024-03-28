import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcbComponent } from './rcb.component';

describe('RcbComponent', () => {
  let component: RcbComponent;
  let fixture: ComponentFixture<RcbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RcbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RcbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
