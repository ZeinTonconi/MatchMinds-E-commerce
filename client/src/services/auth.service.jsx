
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

    async loginService(email, password) {

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password})
            });
            if(!response)
                throw new Error("Error with the network")
            console.log(response)
            const responseData = await response.json();
            const {msg, user} = responseData
            if(user){
                await localStorage.setItem('user', JSON.stringify(user))
                this.state = this.state.login()
                return user
            }
            console.log(responseData)
            throw new Error(msg)
        } catch (error) {
            console.log(error)
            return null
        }
        
    }

}

export default AuthService