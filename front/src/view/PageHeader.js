import React from 'react';
import {Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'



const PageHeader = () => {
    return (
        [
            // Si le format est celui d'un Pc
            <div class="desktopItem" style={{textAlign:"center"}}>
                <Image src={logo} alt="Logo" href="/" style={{ width:'40%'}} />
                <Link to="/admin" style={{position:"absolute",top:'2em' ,right:"2em"}} >
                    <Button icon="male" content="Espace admin"/>
                </Link>
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
