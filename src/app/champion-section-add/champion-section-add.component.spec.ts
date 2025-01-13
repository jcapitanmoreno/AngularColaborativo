import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSectionAddComponent } from './champion-section-add.component';

describe('ChampionSectionAddComponent', () => {
  let component: ChampionSectionAddComponent;
  let fixture: ComponentFixture<ChampionSectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSectionAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
