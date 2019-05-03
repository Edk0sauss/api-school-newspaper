import React, {Component} from 'react'
import {Table, Image, Button} from 'semantic-ui-react'
import ModalSuppression from './ModalSuppression'

class ToucanLine extends Component {
    constructor(props) {
        super(props)
        this.state = {isModalOpen: false}
        this.closeModal = this.closeModal.bind(this)
    }


    date(time){
        const dateObject = new Date(time)
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDay();
        return (`${day+1}/${month+1}/${year}`)
    }

    closeModal() {
        this.setState({ isModalOpen: false })
    }

    render(){
        return (
            <Table.Row>
                <Table.Cell >
                    <a href={`http://localhost:8000/toucan/pdf/${this.props.toucan["_id"]}`}>
                    <Image
                    src={`/toucan/img/${this.props.toucan["_id"]}`}
                    size="small"
                    />
                    </a>
                </Table.Cell>
                <Table.Cell  >
                    {this.props.toucan.title}
                </Table.Cell>
                <Table.Cell  >
                    {this.date(this.props.toucan.date)}
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