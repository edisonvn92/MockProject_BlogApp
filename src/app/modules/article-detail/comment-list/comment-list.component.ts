import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../../services/comments/comment.service';
import { Comment } from '../../../classes/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  private slug = '';
  constructor(
    private route: ActivatedRoute,
    protected commentService: CommentService
  ) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.commentService.loadCommentsList(this.slug).then(
      value => {}, error => {
        console.log(error);
      }
    )
  }

  deleteComment(id, index) {
    this.commentService.deleteComment(id, index).then(
      value => {}, error => {
        console.log(error);
      }
    );
  }

}
