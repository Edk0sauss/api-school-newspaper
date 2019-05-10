import React,{Component} from 'react';

class Login extends Component {

    componentDidMount(){
        localStorage.setItem("token",this.props.match.params.token);
        console.log(localStorage.getItem("token"));
        
        
    }
    render(){
        return (
            <div>tesst</div>
        )
    }
}

export default Login