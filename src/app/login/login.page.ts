import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public ssn: string = '';
  constructor(
    public httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  submit(){
    console.log('Email ' + this.ssn);
  }

}
