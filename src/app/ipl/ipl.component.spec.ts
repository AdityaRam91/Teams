import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplComponent } from './ipl.component';

describe('IplComponent', () => {
  let component: IplComponent;
  let fixture: ComponentFixture<IplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
