import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CskComponent } from './csk.component';

describe('CskComponent', () => {
  let component: CskComponent;
  let fixture: ComponentFixture<CskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
