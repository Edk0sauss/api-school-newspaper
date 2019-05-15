import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const ToucanCard = ({...props}) => {
    return (
        <Card
        href={props.link}
        >
            <Image src={props.image} size="small"/>
            <Card.Content>
            <Card.Header content="HDNZIDJZEP"/>
            </Card.Content>
        </Card>
    )
}

export default ToucanCard