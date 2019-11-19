import React, {Component} from 'react'
import {Form, Message} from 'semantic-ui-react'
class FormToucan extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            titleError: false,

            toucan: undefined,

            cover: undefined,

            dateShown:"",
            date: undefined,
            
            responseMessage:"",
        }
    }

    onTitleChange = (e,{value}) => {
        if(/^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._\s'-]{1,60}$/.test(value)) {
            //Si le nom passe la regex du back
            this.setState({title: value, titleError: false})
        } else {
            this.setState({title: value, titleError: true})
        }
    }

    onToucanChange = (e) => {
        const file = e.target.files[0];

        if (file.type === 'application/pdf') {  // Si on a bien un pdf
            this.setState({toucan: file, toucanError: false})
        } else {
            this.setState({toucan: file, toucanError: true})
        }

    }

    onFileChange = (event) => {
        const file = event.target.files[0]
        const name = event.target.name
        this.setState({[name]: file})
    }

    onDateChange = (event,{value}) =>{
        let [year,month,day] = value.split("-")
        this.setState({dateShown: value, date: new Date(Date.UTC(year,month-1,day,0,0,0))});
    }

    onSubmit = () => {
       this.setState({responseMessage:""});
       const {date, title, toucan, cover} = this.state;
       
       const form = new FormData()
       form.append("date",date)
       form.append("title",title)
       form.append("toucan",toucan)
       form.append("cover",cover)
       fetch(`${this.props.backURL}/toucan/toucans`,{
            method: 'POST',
            headers:{token: localStorage.getItem("token")},
            body: form
       })
       .then((response) => {
            if (response.ok) { // Si la réponse est bonne on reload tout simplement
                window.location.reload()
            } else {
                response.json()
                .then((json)=>{
                    if(json.errmsg.split(" ")[0]==="E11000"){ // L'erreur la plus probable
                        this.setState({responseMessage:"La date sélectionnée existe déjà"})
                    } else {
                        this.setState({responseMessage:json.errmsg})
                    }
                })
            };
       } )
       .catch((err)=> this.setState({responseMessage:err}))
    }

    render() {
        const errorMessage = [];
        if (this.state.titleError) {
            errorMessage.push("Le thème doit faire entre 1 et 60 caractères, les caractères spéciaux ($ € { } [ ] ... ) ne sont pas autorisés")
        }
        const formError= errorMessage.length !== 0; //Le formulaire a une erreur si errorMessage a au moins 1 erreure

        return (
            <div>
            <Form error={formError} style={{margin:"auto"}} onSubmit={this.onSubmit} >
                <Form.Group >
                <Form.Input
                    type="text"
                    label="Thème Toucan"
                    placeholder="Thème"
                    name="title"
                    onChange={this.onTitleChange}
                    value={this.state.title}
                    error={this.state.titleError}
                    icon="paper plane"
                    iconPosition="left"
                    required
                />
                <Form.Input
                    type="date"
                    label="Date"
                    name="date"
                    icon="calendar"
                    iconPosition="left"
                    onChange={this.onDateChange}
                    value={this.state.dateShown}
                    required
                />
                </Form.Group>
                <Form.Group>
                <Form.Input
                    type="file"
                    label="PDF du Toucan"
                    onChange={this.onFileChange}
                    style={{maxWidth:"25em"}}
                    name="toucan"
                    accept="application/pdf"
                    required
                />
                <Form.Input
                    type="file"
                    label="Cover du Toucan"
                    onChange={this.onFileChange}
                    style={{maxWidth:"25em"}}
                    name="cover"
                    accept="image/png, image/jpeg"
                    required
                />
                </Form.Group>
                <Form.Button disabled={formError} content="C'est parti !" />
                <Message error header="Formulaire incomplet" content={
                    <ul>
                        {errorMessage.map((err) => {return <li>{err}</li>})}
                    </ul>
                } />
            </Form>
            {this.state.responseMessage ?
            <Message negative header="Erreur Serveur" content={this.state.responseMessage}></Message>: null}
            </div>
        )
    }

}
export default FormToucan