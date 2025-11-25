import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToButton } from './go-to-button';

describe('GoToButton', () => {
  let component: GoToButton;
  let fixture: ComponentFixture<GoToButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
