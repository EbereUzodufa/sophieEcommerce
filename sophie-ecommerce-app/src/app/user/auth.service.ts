import { Injectable } from "@angular/core";
import { IUserReg, IUSer } from '../shared';

@Injectable()
export class AuthService{
    currentUser: IUSer;
    registerUser(user:IUserReg){
        // localStorage.setItem()
        this.currentUser = user.userDetail;
    }

    loginUser(userEmail:string, password: string){
        if (userEmail == 'crosschidera@gmailcom' && password === 'password') {
            this.currentUser = {
                "id": 1,
                "firstName": "cross",
                "lastName": "chidera",
                "email": "crosschidera@gmailcom",
                "phoneNumber": "1579737786364",
                "address": {
                    "location": "1001 ipsum chang ridiculus",
                    "city": "lorum",
                    "state": "lagos",
                    "country": "nigeria"
                }
            }
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}

let users: IUserReg[] = [];