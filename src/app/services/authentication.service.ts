import { Injectable } from "@angular/core";

export interface CurrentUser {
    id: string;
    name: string;
    username: string;
    email: string;
    apiKey: string;
}

@Injectable({
  providedIn: 'root'
})
export default class AuthenticationService {
    currentUser: CurrentUser | null = null;

    getCurrentUser() : CurrentUser | null {
        return this.currentUser;
    }

    setCurrentUser(user: CurrentUser) {
        this.currentUser = user;
    }
  
}
