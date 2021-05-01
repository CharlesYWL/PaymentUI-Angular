import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  @Input() title: string;

  constructor(private router: Router, private r: ActivatedRoute) {}

  ngOnInit(): void {}

  goTo(location: string) {
    console.log(location);
    this.router.navigate(['./' + location], { relativeTo: this.r });
  }
}
