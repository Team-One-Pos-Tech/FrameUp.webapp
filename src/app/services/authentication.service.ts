export interface CurrentUser {
    id: number;
    username: string;
    email: string;
    apiKey: string;
}

export default class AuthenticationService {
    getCurrentUser() : CurrentUser{
        return <CurrentUser>{
            id: 1,
            username: 'admin',
            email: ''
        };
    }
  
}
