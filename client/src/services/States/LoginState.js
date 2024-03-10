
import { LogoutState } from "./LogoutState"

export class LoginState{
    login(){
        return this
    }

    logout(){
        return new LogoutState()
    }
}