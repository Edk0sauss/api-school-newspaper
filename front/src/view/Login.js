import React,{Component} from 'react';

class Login extends Component {

    componentDidMount(){
        localStorage.setItem("token",this.props.match.params.token);
        console.log(localStorage.getItem("token"));
        window.location = '/admin';
        
        
    }
    render(){
        return (
            <div>Vous allez être redirigé</div>
        )
    }
}

export default Login