import React,  {useState} from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
import ModalSuppression from './../../utils//ModalSuppression'

const ToucanCard = ({...props}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	let supressModal,suppressButton = undefined

	if (props.isAdmin){
		supressModal = <ModalSuppression
		open= {isModalOpen}
		toucanId={props.toucanId}
		closeModal={()=> {setIsModalOpen(!isModalOpen); console.log(props.toucanId)}} />

		suppressButton = <Button
		style={{position:"absolute",left:"5px",top:"5px"}}
		negative
		icon="cancel"
		onClick={(e) => {e.preventDefault();  setIsModalOpen(!isModalOpen)}}/>
	}

    return (
            <Card
                link
                style={{margin:"1em"}}
            >
                <Card.Content href={props.link} >
                <Card.Header>
					{suppressButton}
					{props.header}
				</Card.Header>
                <Card.Meta content={props.date} textAlign="right"/>
                </Card.Content>
                <Image href={props.link} src={props.image}/>
				{supressModal}
            </Card>
    )
}

export default ToucanCard