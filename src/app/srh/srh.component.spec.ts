import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrhComponent } from './srh.component';

describe('SrhComponent', () => {
  let component: SrhComponent;
  let fixture: ComponentFixture<SrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SrhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
