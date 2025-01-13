import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSectionComponent } from './champion-section.component';

describe('ChampionSectionComponent', () => {
  let component: ChampionSectionComponent;
  let fixture: ComponentFixture<ChampionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
