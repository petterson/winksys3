import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfuncionarioComponent } from './addfuncionario.component';

describe('AddfuncionarioComponent', () => {
  let component: AddfuncionarioComponent;
  let fixture: ComponentFixture<AddfuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
