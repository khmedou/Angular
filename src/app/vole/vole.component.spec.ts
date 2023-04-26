import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleComponent } from './vole.component';

describe('VoleComponent', () => {
  let component: VoleComponent;
  let fixture: ComponentFixture<VoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
