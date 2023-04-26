import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVOLSComponent } from './add-vols.component';

describe('AddVOLSComponent', () => {
  let component: AddVOLSComponent;
  let fixture: ComponentFixture<AddVOLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVOLSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVOLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
