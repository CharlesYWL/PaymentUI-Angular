import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.sass'],
})
export class DirectiveTestComponent implements OnInit {
  // imgs
  activeImg = 0;
  images = [
    {
      title: 'Title #1',
      url:
        'https://images.unsplash.com/photo-1588750099599-09efbe4377ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 1,
    },
    {
      title: 'Title #2',
      url:
        'https://images.unsplash.com/photo-1588598158189-3d6e4dade28b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 2,
    },
    {
      title: 'Title #3',
      url:
        'https://images.unsplash.com/photo-1588607684532-1c4a7ab618f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      downloadable: 0,
    },
    {
      title: 'Title #4',
      url:
        'https://images.unsplash.com/photo-1588710277537-126980e8d44e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 1,
    },
    {
      title: 'Title #5',
      url:
        'https://images.unsplash.com/photo-1588627541420-fce3f661b779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      downloadable: 2,
    },
    {
      title: 'Title #6',
      url:
        'https://images.unsplash.com/photo-1588607778482-2358f4f0be5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
      downloadable: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  inWindow(i: number) {
    const windowSize = 3;
    const idx = Math.floor(this.activeImg / windowSize);
    return idx * windowSize <= i && i < (idx + 1) * windowSize;
  }
}
