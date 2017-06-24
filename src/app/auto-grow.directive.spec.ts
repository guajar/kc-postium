import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoGrowDirective } from './auto-grow.directive';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { FromNowPipe } from './/from-now.pipe';

xdescribe('AutoGrowDirective', () => {
  let component: PostPreviewComponent;
  let element: ComponentFixture<PostPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPreviewComponent, FromNowPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    element = TestBed.createComponent(PostPreviewComponent);
    component = element.componentInstance;
    element.detectChanges();
  });

  it('Debería instanciarse', () => {
    const directive = new AutoGrowDirective(element);
    expect(directive).toBeTruthy();
  });

});
