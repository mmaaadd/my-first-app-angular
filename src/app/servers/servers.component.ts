import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'Test server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(): void{
    this.serverCreationStatus = 'Server was created';
  }

  // ONE WAY DATA BINDIGS
  // onUpdateServerName(event: Event): void{
  //   // console.log(event);
  //   this.serverName = (event.target as HTMLInputElement).value;
  // }
}
