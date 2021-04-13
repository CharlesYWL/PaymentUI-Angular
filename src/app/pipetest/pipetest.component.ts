import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.sass'],
})
export class PipetestComponent implements OnInit {
  // Posts
  posts = [
    {
      img: 'assets/image1.jpg',
      author: 'John',
      title: 'really tittle1',
      time: new Date(),
    },
    {
      img: 'assets/image2.jpg',
      author: 'Mike',
      title: 'some thing fake',
      time: new Date('2019-01-16'),
    },
    {
      img: 'assets/image3.jpg',
      author: 'Jane',
      title: 'pipe test',
      time: new Date('2021-04-24'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
