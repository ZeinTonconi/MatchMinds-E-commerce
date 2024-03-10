
import { LoginState } from "./LoginState";

export class LogoutState{
   
    login(){
        return new LoginState();
    }

    logout(){
        return this;
    }
}