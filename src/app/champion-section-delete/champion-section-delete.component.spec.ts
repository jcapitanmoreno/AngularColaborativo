import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSectionDeleteComponent } from './champion-section-delete.component';

describe('ChampionSectionDeleteComponent', () => {
  let component: ChampionSectionDeleteComponent;
  let fixture: ComponentFixture<ChampionSectionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSectionDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSectionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
