import { Injectable } from '@angular/core';

interface User {
  name: string;
  active: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): User[] {
    return [
      { name: 'Max', active: true },
      { name: 'Anna', active: true },
      { name: 'Chris', active: false },
      { name: 'Manu', active: false },
    ];
  }
}
