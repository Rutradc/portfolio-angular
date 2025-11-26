import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitButton } from './git-button';

describe('GitButton', () => {
  let component: GitButton;
  let fixture: ComponentFixture<GitButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
