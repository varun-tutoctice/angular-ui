import { Component, OnInit } from '@angular/core';
import { version } from '../../package.json';
import { environment } from '../../src/environments/environment.prod';
// import Html from "../assets/coverage/index.html";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-project';
  public version: string = version;
  timestamp = environment.timestamp;
  // content: any = "";

  // css: "../assets/coverage/base.css"
  // urlSafe;
  // iframe: any;
  // style: any;
  // cssLink: any;

  //test = Html;
  // constructor(){}

//   ngOnInit(){
// // this.iframe = document.getElementById('unit-tests');
// //    // this.style = document.createElement('style');
// // this.style = document.createElement("link");
// // this.style.href = "../assets/styles.css";
// // this.style.rel = "stylesheet";
// // this.style.type = "text/css";
// // console.log(this.style);
// // this.iframe.contentDocument.body.appendChild(this.style);
// // console.log(this.iframe.contentDocument);

//   // fetch('../assets/coverage/index.html').then(res => res.text()).then(data => {
//   //   this.content = this.sanitizer.bypassSecurityTrustHtml(data);
//   //   console.log(this.content)
//   // })
// }
}
