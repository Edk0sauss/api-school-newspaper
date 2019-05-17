import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const ToucanCard = ({...props}) => {
    return (
            <Card
                href={props.link}
                link
                style={{margin:"1em"}}
            >
                <Card.Content>
                <Card.Header content={props.header}/>
                <Card.Meta content={props.date} textAlign="right"/>
                </Card.Content>
                <Image src={props.image}/>
            </Card>
    )
}

export default ToucanCard