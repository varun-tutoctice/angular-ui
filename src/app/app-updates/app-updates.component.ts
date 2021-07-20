import { Component, OnInit } from '@angular/core';
import { BuildInfoService } from '../Services/build-info.service';
@Component({
  selector: 'app-app-updates',
  templateUrl: './app-updates.component.html',
  styleUrls: ['./app-updates.component.css']
})
export class AppUpdatesComponent implements OnInit {


  buildData;
  constructor(private bi: BuildInfoService) { }

  ngOnInit(): void {

    this.bi.getData().subscribe(response=> {
      this.buildData = response;
    })

  }

}
