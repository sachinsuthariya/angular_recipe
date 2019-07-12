import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        let data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        console.log(data);

        return this.http.post<AuthResponseData>("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDEnVHPynvFoHaPi0ROeJL60koK3mq0vDA", data);
    }
}