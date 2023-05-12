import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiqrComponent } from './miqr.component';

describe('MiqrComponent', () => {
  let component: MiqrComponent;
  let fixture: ComponentFixture<MiqrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiqrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
