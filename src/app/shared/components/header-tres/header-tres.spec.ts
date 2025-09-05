import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTres } from './header-tres';

describe('HeaderTres', () => {
  let component: HeaderTres;
  let fixture: ComponentFixture<HeaderTres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
