import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Springskate } from './springskate';

describe('Springskate', () => {
  let component: Springskate;
  let fixture: ComponentFixture<Springskate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Springskate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Springskate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
