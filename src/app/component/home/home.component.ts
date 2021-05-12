import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, private router: Router) { }

  // link: any;
  link: any[] = [];

  ngOnInit(): void {
    this.loadAll();
  }

loadAll(){
  this.link =[];
  var link1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1mc1bwwkNSs')
  var link2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/terrX5lNBkU')
  var link3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/7YbfDiCC-qk')
  var link4 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9VNI3s7rUoQ')
  var link5 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gv9hrQzU0cA')
  var link6 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RBumgq5yVrA')
  var link7 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zABLecsR5UE')
  var link8 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pj6k-EFxqAI')
  this.link.push(link1, link2, link3, link4, link5, link6, link7, link8)
}

loadHindi(){
  this.link =[];
  var link1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/1mc1bwwkNSs')
  var link2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/terrX5lNBkU')
  var link3 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/7YbfDiCC-qk')
  var link4 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/9VNI3s7rUoQ')
  this.link.push(link1, link2, link3, link4)
}

loadEnglish(){
  this.link =[];
  var link5 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gv9hrQzU0cA')
  var link6 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/RBumgq5yVrA')
  var link7 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zABLecsR5UE')
  var link8 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/pj6k-EFxqAI')
  this.link.push(link5, link6, link7, link8)
}

navigate(){
  this.router.navigateByUrl('profile')
}
}
