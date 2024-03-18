import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl: string = environment.commonUrl;

  constructor(private router: Router, private http: HttpClient, private message: MessageService) { }

  async signup(data: any) {
    var url = this.apiurl + '/auth/signup';
    const signup = await lastValueFrom(this.http.post<any>(url, data));
    return signup;
  }

  async editSignUp(data: any) {
    var url = this.apiurl + '/auth/signup';
    const signup = await lastValueFrom(this.http.put<any>(url, data));
    return signup;
  }

  async login(credentials: any) {
    var url = this.apiurl + '/auth/authenticate';
    const login = await lastValueFrom(this.http.post<any>(url, credentials));
    return login;
  }

  async forgetPassword(username: string) {
    var url = this.apiurl + '/auth/forgotPassword?username=' + encodeURIComponent(username);
    const reset = await lastValueFrom(this.http.post<any>(url, username));
    return reset;
  }

  async resetPassword(data: any) {
    var url = this.apiurl + '/auth/resetPassword?token=' + data.token + '&newPassword=' + data.newPassword;
    const reset = await lastValueFrom(this.http.post<any>(url, data));
    return reset;
  }

  redirectToLogin() {
    sessionStorage.clear();
    this.message.add({
      severity: 'error',
      summary: 'Session Expired',
      detail: 'Session Expired, login again',
    });
    this.router.navigate(['/']);
  }

  redirectInvalid() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  renewRefreshToken() {
    var url = this.apiurl + '/auth/refreshtoken';
    sessionStorage.setItem('token', '');
    const refreshtoken = sessionStorage.getItem('refreshToken');
    var data = { refreshToken: refreshtoken };
    // const refreshdata = await lastValueFrom(this.http.post<any>(url, data));
    return this.http.post<any>(url, data);
  }

  getUserId(): string {
    const token = sessionStorage.getItem('token');
    let jwt: any = {};

    if (token) {
      jwt = atob(token!.split('.')[1]);
      jwt = JSON.parse(jwt);
    }

    return jwt.userDetails.id;
  }

  async getUser() {
    const currentUserId = this.getUserId();
    var url = this.apiurl + '/user/get/' + encodeURIComponent(currentUserId);
    const user = await lastValueFrom(this.http.get<any>(url));
    return user;
  }

  getUserName(): string { 
    const token = sessionStorage.getItem('token');
    let jwt: any = {};

    if (token) {
      jwt = atob(token!.split('.')[1]);
      jwt = JSON.parse(jwt);
    }
    return jwt.sub;
  }

  getAuthStatus() {
    const token = sessionStorage.getItem('token');
    let status = false;
    if (token) status = true;
    return status;
  }

  getRoles() {
    const token = sessionStorage.getItem('token');

    let jwt: any = {};
    if (token) {
      jwt = atob(token!.split('.')[1]);
      jwt = JSON.parse(jwt);
    }

    return jwt.roles;
  }

  async getAllRoles() {
    var url = this.apiurl + '/roles';
    const signup = await lastValueFrom(this.http.get<any>(url));
    return signup.content;
  }

  async verifyemail(token: string) {
    var url =
      this.apiurl + '/auth/verifyemail?token=' + encodeURIComponent(token);
    const user = await lastValueFrom(this.http.get<any>(url));
    return user;
  }
  async resendEmail(email: string) {
    var url =
      this.apiurl +
      '/auth/resendVerifyEmail?email=' +
      encodeURIComponent(email);
    const data = await lastValueFrom(this.http.get<any>(url));
    return data;
  }

  //https://api.ifyn.com/doneocard/api/auth/verifyOTP


  async loginAPI(data: any) {
    var url = this.apiurl + '/auth/verifyOTP';
    const sendOtpResponse = await lastValueFrom(this.http.post<any>(url, data));
    return sendOtpResponse;
  }
}
