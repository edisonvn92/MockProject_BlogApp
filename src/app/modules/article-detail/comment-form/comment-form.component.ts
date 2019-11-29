import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../../../services/users/user-authentication.service';
import { CommentService } from '../../../services/comments/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commentForm = new FormGroup({
    commentField: new FormControl('', Validators.required)
  })
    
  currentUserImage = this.authService.getCurrentUserImage();
  constructor(
    private router: Router,
    private authService: UserAuthenticationService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    
  }

  addComment() {
    this.commentService.addComment(this.commentForm.get('commentField').value).then(
      value => {
        this.commentForm.reset();
      }, error => {
        console.log(error);
        this.router.navigate(['/signup']);
      }
    )
  }

}
