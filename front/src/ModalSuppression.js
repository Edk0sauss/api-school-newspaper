import React, {Component} from 'react'
import {Modal, Button, Image} from 'semantic-ui-react'
import env from './.env'

class ModalSupression extends Component {
    deleteToucan(id) {
        fetch(`${env.backURL}/toucan/delete/${id}`,{
            method: "Post"
        })
        .then(this.props.closeModal())
    }

    render() {
        return (
            <Modal open={this.props.open} size="tiny"
                onClose={()=>this.props.closeModal()}
            >
            <Modal.Header style ={{textAlign:"center"}}>Veux tu vraiment supprimer ce Toucan ?</Modal.Header>
            <Modal.Content>
                <Image centered src={`${env.backURL}/toucan/img/${this.props.toucanId}`} size="medium"/>
            </Modal.Content>
            <Modal.Actions style ={{textAlign:"center"}} >
                <Button positive onClick={()=>this.props.closeModal()}> Laisser le Toucan là où il est</Button>
                <Button negative onClick={()=>this.deleteToucan(this.props.toucanId)}>Supprimer le Toucan</Button>
            </Modal.Actions>
        </Modal>
        )
    }
}

export default ModalSupression