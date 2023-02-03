import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IJwtResponse } from '../models/jwt-response';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth_server: string = 'http://localhost:4001/api';
  authSubject = new BehaviorSubject(false);
  private token: string = '';

  constructor(private httpClient: HttpClient) {}

  register(user: IUser): Observable<IJwtResponse> {
    return this.httpClient
      .post<IJwtResponse>(`${this.auth_server}/register`, user)
      .pipe(
        tap((res: IJwtResponse) => {
          if (res) {
            this.saveToken(res.user.token, res.user.expiresIn);
          }
        })
      );
  }

  login(user: IUser): Observable<IJwtResponse> {
    return this.httpClient
      .post<IJwtResponse>(`${this.auth_server}/login`, user)
      .pipe(
        tap((res: IJwtResponse) => {
          if (res) {
            this.saveToken(res.user.token, res.user.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) localStorage.getItem('ACCESS_TOKEN');
    return this.token;
  }
}
