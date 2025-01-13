import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionSectionEditComponent } from './champion-section-edit.component';

describe('ChampionSectionEditComponent', () => {
  let component: ChampionSectionEditComponent;
  let fixture: ComponentFixture<ChampionSectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionSectionEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
