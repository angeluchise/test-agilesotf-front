import { Component, OnInit } from '@angular/core';
import { GlobalState } from '@services/even.service';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private loginService: LoginService, private globalState: GlobalState) {

  }

  ngOnInit(): void {
    this.user = this.loginService.payload();
    console.log(this.user);
    
    this.globalState.replaySubjectSubscribe('refresh', () => {

    })

  }

}
