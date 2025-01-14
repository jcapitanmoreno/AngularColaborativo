import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSectionFormComponent } from './champion-section-form.component';

describe('ChampionSectionFormComponent', () => {
  let component: ChampionSectionFormComponent;
  let fixture: ComponentFixture<ChampionSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
