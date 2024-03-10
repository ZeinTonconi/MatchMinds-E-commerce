
import LoginProfile from "./LoginProfile.jsx";
import LoginForm from "./LoginForm.jsx";
import { useAuth } from "../App.jsx";

export default function Login(){

    const authService = useAuth().authService
    const user = authService.getUser();

    return (<div>
        {user? <LoginProfile/>: <LoginForm/>}
    </div>)
}


