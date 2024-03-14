import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(30),])
    })
  }

  onClickLogin()
  {
    alert(JSON.stringify(this.loginForm.value));

    if( this.loginForm.value.username == '7204839067')
    {
      sessionStorage.setItem('loginBy', "Pooja") ;
      sessionStorage.setItem('loginRole' , "Employee");
      this.router.navigate(["/dashboard"]);
    }
    else if(this.loginForm.value.username == '9745899658')
    {
      sessionStorage.setItem('loginBy', "Narayana") ;
      sessionStorage.setItem('loginRole' , "Branch Manager");
      this.router.navigate(["/dashboard/branchManager"]);
    }
  }

}
