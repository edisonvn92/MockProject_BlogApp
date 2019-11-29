import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.css']
})
export class FormErrorMessagesComponent implements OnInit {
  errorMessages: string[] = [];
  @Input() error: Object;
  constructor() { }

  ngOnInit() {
    for (let ele in this.error ) {
      (this.error[ele] as Array<string>).forEach(err => {
        this.errorMessages.push(ele.slice(0,1).toUpperCase() + ele.slice(1) + " " + err)
      });
    }
  }

}
