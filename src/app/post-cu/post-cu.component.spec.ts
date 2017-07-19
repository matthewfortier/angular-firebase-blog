import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCuComponent } from './post-cu.component';

describe('PostCuComponent', () => {
  let component: PostCuComponent;
  let fixture: ComponentFixture<PostCuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
