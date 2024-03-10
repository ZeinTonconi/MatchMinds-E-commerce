
import { LoginState } from "./States/LoginState"
import { LogoutState } from "./States/LogoutState"



class AuthService {

    constructor(){

        this.state = this.getUser()? new LoginState(): new LogoutState();
    }

    getUser() {
        this.user = JSON.parse(localStorage.getItem('user'))
        return this.user
    }

    
    logoutService(){
        localStorage.removeItem('user')
        this.state = this.state.logout();
    }

    loginService(email, password) {
        // this.user = {name: "Zeincho"}
        // localStorage.setItem('user',JSON.stringify({name: "Zeincho"}))
        // this.state = this.state.login();
        
        fetch('localhost/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('user',data.user)
            return data.user;
        })
        .catch(error => {
            console.log(error)
            return null
        });
    }

}

export default AuthService