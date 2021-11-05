import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastmoviesComponent } from './lastmovies.component';

describe('LastmoviesComponent', () => {
  let component: LastmoviesComponent;
  let fixture: ComponentFixture<LastmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
