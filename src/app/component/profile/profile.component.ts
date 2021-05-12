import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills =[
    { title: 'Angular' },
    { title: 'TypeScript'},
    { title: 'JavaScript'},
    { title: 'HTML'},
    { title: 'Bootstrap' },
    { title: 'Material UI'},
    { title: 'Git' },
    { title: 'Node Js'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  gitRepo(){
    alert("URL not available")
  }
}
