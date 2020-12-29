import { Injectable } from '@angular/core';

export  interface User {
  id: number;
  nom: string;
  prenom: string;
  role: string;
  mail: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // @ts-ignore
  private  users: User[] = [
    {id: 1,
      nom: 'diop',
      prenom: 'astou',
      role: 'ADMIN',
      mail: '@faye',
      password: 'string',
    },
    {id: 2,
      nom: 'faye',
      prenom: 'allasane',
      role: 'CLIENT',
      mail: '@faye',
      password: 'password',
    },
    {id: 3,
      nom: 'ndiaye',
      prenom: 'abdou',
      role: 'CLIENT',
      mail: '@ndiaye',
      password: 'password',
    },
  ];

  constructor() { }
  findUserById(id: number): User {
    const  user = this.users.find(
      (u: User) => {
        // tslint:disable-next-line:triple-equals
        return u.id == id;
    }
    );
    // @ts-ignore+
    return user ;
  }

  // tslint:disable-next-line:typedef
  getUserByEmailPassword(mail: string, password: string): User | null {
    const user = this.users.find(
      (u: User) => {
        return u.mail === mail && u.password === password;
      }
    );
    // @ts-ignore
    return user;
  }


}
