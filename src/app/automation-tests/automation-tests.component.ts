import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-automation-tests',
  templateUrl: './automation-tests.component.html',
  styleUrls: ['./automation-tests.component.css']
})
export class AutomationTestsComponent implements OnInit {


  url: string = "../assets/automation/index.html";
  urlSafe;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
