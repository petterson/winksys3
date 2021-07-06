import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafuncionarioComponent } from './listafuncionario.component';

describe('ListafuncionarioComponent', () => {
  let component: ListafuncionarioComponent;
  let fixture: ComponentFixture<ListafuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListafuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListafuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
