import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToRouteButton } from './go-to-route-button';

describe('GoToRouteButton', () => {
  let component: GoToRouteButton;
  let fixture: ComponentFixture<GoToRouteButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToRouteButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToRouteButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
