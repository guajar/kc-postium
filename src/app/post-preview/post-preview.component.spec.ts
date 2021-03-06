import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromNowPipe } from '../from-now.pipe';
import { Post } from './../post';
import { PostPreviewComponent } from './post-preview.component';
import { User } from './../user';

describe('PostPreviewComponent', () => {

  let component: PostPreviewComponent;
  let fixture: ComponentFixture<PostPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostPreviewComponent, 
        FromNowPipe
      ]
    });
    fixture = TestBed.createComponent(PostPreviewComponent);
    component = fixture.componentInstance;
  });

  it('Debería instanciarse', () => {
    component.post = Post.fromJson({});
    component.post.author = User.fromJson({});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
