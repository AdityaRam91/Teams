import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkrComponent } from './kkr.component';

describe('KkrComponent', () => {
  let component: KkrComponent;
  let fixture: ComponentFixture<KkrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KkrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KkrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
