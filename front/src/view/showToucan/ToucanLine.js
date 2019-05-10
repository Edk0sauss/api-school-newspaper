import React, {Component} from 'react'
import {Table, Image, Button} from 'semantic-ui-react'
import ModalSuppression from './ModalSuppression'
import env from '../../.env'

class ToucanLine extends Component {
    constructor(props) {
        super(props)
        this.state = {isModalOpen: false}
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    render(){
        return (
            <Table.Row>
                <Table.Cell >
                    <a href={`${env.backURL}/toucan/pdf/${this.props.toucan["_id"]}`}>
                    <Image
                    src={`${env.backURL}/toucan/img/${this.props.toucan["_id"]}`}
                    size="small"
                    />
                    </a>
                </Table.Cell>
                <Table.Cell  >
                    {this.props.toucan.title}
                </Table.Cell>
                <Table.Cell  >
                    {(new Date(this.props.toucan.date).toLocaleDateString())}
                </Table.Cell>
                <Table.Cell style={{width:"fit-content"}}>
                    <Button negative icon="cancel" onClick={() => this.setState({isModalOpen: true})}/>
                    <ModalSuppression
                    open={this.state.isModalOpen}
                    toucanId={this.props.toucan["_id"]}
                    closeModal={this.closeModal}
                    />
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default ToucanLine