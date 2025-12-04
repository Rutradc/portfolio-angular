import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCard } from './tech-card';

describe('TechCard', () => {
  let component: TechCard;
  let fixture: ComponentFixture<TechCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
