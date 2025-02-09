import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTestComponent } from './link-test.component';

describe('LinkTestComponent', () => {
  let component: LinkTestComponent;
  let fixture: ComponentFixture<LinkTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
