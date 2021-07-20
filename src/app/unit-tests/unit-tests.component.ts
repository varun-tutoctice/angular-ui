import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-unit-tests',
  templateUrl: './unit-tests.component.html',
  styleUrls: ['./unit-tests.component.css']
})


export class UnitTestsComponent implements OnInit {
  url: string = "../assets/coverage/index.html";
  urlSafe;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);



  }

}
