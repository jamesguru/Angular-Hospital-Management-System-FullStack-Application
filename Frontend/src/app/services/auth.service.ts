import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginUser, RegisterUser } from '../interfaces/User';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getDoctors():Observable<RegisterUser[]>{

    return this.http.get<RegisterUser[]>('http://localhost:8000/api/users/getdoctors');
  }
  registerUser(user:RegisterUser):Observable<{message:string}>{


    return this.http.post<{message:string}>('http://localhost:8000/api/users/signup',user) 
  }

  getUsers():Observable<RegisterUser[]>{

    return this.http.get<RegisterUser[]>('http://localhost:8000/api/users');
  }

  deleteUser(id:number):Observable<{message:string}>{


    return this.http.delete<{message:string}>(`http://localhost:8000/api/users/${id}`)
  }

  signIn(login:LoginUser):Observable<Login>{

    return this.http.post<Login>('http://localhost:8000/api/users/signin',login)
 }
}


