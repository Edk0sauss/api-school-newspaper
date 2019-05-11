import React,{Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import env from '../.env';


class LogoutButton extends Component {

    logOut() {
        localStorage.removeItem("token");
        window.location=`${env.logOutURL}?redirect_logout=${env.frontURL}`
    }
    render() {
        return <Button
        style={this.props.style}
        onClick={this.logOut}
        color="violet"
        icon>
        <Icon name="power" style={{ paddingRight:"2em" }}/>
        Déconexion
        </Button>
    }    
}


export default LogoutButton