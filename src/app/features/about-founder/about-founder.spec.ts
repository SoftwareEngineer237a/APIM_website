import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFounder } from './about-founder';

describe('AboutFounder', () => {
  let component: AboutFounder;
  let fixture: ComponentFixture<AboutFounder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutFounder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFounder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
