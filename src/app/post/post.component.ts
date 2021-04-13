import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  @Input() img = '';
  @Input() author = '';
  @Input() title = '';
  @Input() time = new Date();

  constructor() {}

  ngOnInit(): void {}
}
