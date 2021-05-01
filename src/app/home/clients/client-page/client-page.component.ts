import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.sass'],
})
export class ClientPageComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id');
    console.log('Our passed ID is', id);
  }
}
