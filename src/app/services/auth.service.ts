import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  returnUrl: string;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  login(user: User) {
    if (user.userName === 'admin' && user.password === 'admin' ) {
      this.loggedIn.next(true);
      localStorage.setItem("loggedIn", "true");
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
      this.router.navigate([this.returnUrl]);
      //this.router.navigate(['/dashboard']);
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}