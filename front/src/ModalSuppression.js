import React, {Component} from 'react'
import {Modal, Button, Image, Grid} from 'semantic-ui-react'

class ModalSupression extends Component {
    state={hihi:true};
    render() {
        return (
            <Modal open={this.props.open} size="tiny"
                onClose={()=>this.props.closeModal()}
            >
            <Modal.Header style ={{textAlign:"center"}}>Veux tu vraiment supprimer ce Toucan ?</Modal.Header>
            <Modal.Content>
                <Image centered src={`/toucan/img/${this.props.imageId}`} size="medium"/>
            </Modal.Content>
            <Modal.Actions style ={{textAlign:"center"}} >
                <Button negative>Supprimer le Toucan</Button>
                <Button positive> Laisser le Toucan là où il est</Button>
            </Modal.Actions>
        </Modal>
        )
    }
}

export default ModalSupression