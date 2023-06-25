import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDropDownComponent } from './character-drop-down.component';

describe('CharacterDropDownComponent', () => {
  let component: CharacterDropDownComponent;
  let fixture: ComponentFixture<CharacterDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDropDownComponent]
    });
    fixture = TestBed.createComponent(CharacterDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
