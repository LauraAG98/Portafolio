import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDos } from './header-dos';

describe('HeaderDos', () => {
  let component: HeaderDos;
  let fixture: ComponentFixture<HeaderDos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
