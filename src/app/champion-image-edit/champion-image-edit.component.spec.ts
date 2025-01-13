import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionImageEditComponent } from './champion-image-edit.component';

describe('ChampionImageEditComponent', () => {
  let component: ChampionImageEditComponent;
  let fixture: ComponentFixture<ChampionImageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionImageEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionImageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
