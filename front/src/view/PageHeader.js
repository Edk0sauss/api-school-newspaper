import React from 'react';
import {Image, Button} from 'semantic-ui-react'
import LogoutButton from '../utils/LogoutButton'
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'
import env from './../.env'



const PageHeader = (props) => {
    return (
        [
            // Si le format est celui d'un Pc
            <div class="desktopItem" style={{textAlign:"center"}}> {console.log(props.isLogged)}
                <Image src={logo} alt="Logo" href="/" style={{ width:'40%'}} />
				{props.isLogged ? <LogoutButton style={{position:"absolute",top:'2em' ,right:"2em"}}/>:
						<Button icon="male" content="Espace admin" style={{position:"absolute",top:'2em' ,right:"2em"}} onClick={() =>window.location=`${env.backURL}/oauth/login`}/>

				}
            </div>,
            // Si le format est celui d'un téléphone
            <div class="phoneItem" style={{textAlign:"center"}}>
                <Image src={logo} alt="Logo" href="/" style={{ margin: "2em"}} />
                <br/>
                <Link to="/admin"  >
                    <Button icon="male" content="Espace admin" style={{margin:"1em"}}/>
                </Link>
            </div>
        ]
    )
}

export default PageHeader;
