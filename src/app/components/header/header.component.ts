import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '@config/config';
import { GlobalState } from '@services/even.service';
import { LoginService } from '@services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private loginService: LoginService, private globalState: GlobalState, private router: Router) {

  }

  ngOnInit(): void {
    this.getUser();
    this.globalState.replaySubjectSubscribe('refresh', () => {
      this.getUser();
    })

  }
  getUser() {
    this.loginService.payload().subscribe((data: any)=> {
      this.user = data.data;
    });
  }
  goToHome() {
    this.router.navigate([`/${config.router.home}`]);
  }
}
