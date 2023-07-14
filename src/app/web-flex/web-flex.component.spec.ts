import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebFlexComponent } from './web-flex.component';

describe('WebFlexComponent', () => {
  let component: WebFlexComponent;
  let fixture: ComponentFixture<WebFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebFlexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
