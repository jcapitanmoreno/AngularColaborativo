import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestLinksComponent } from './interest-links.component';

describe('InterestLinksComponent', () => {
  let component: InterestLinksComponent;
  let fixture: ComponentFixture<InterestLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
