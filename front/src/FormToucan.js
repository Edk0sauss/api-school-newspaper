import React, {Component} from 'react'
import {Form, Message} from 'semantic-ui-react'
import {DateInput} from 'semantic-ui-calendar-react'
import 'moment/locale/fr'
import env from './.env'


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
        let [day,month,year] = value.split("-")
        this.setState({dateShown: value, date: new Date(Date.UTC(year,month-1,day,0,0,0))});
    }

    onSubmit = () => {
       const {date, title, toucan, cover} = this.state;
       
       const form = new FormData()
       form.append("date",date)
       form.append("title",title)
       form.append("toucan",toucan)
       form.append("cover",cover)
       
       fetch(`${env.backURL}/toucan/toucans`,{
         method: 'POST',
         body: form
       })
       .then(() => window.location.reload())
       .catch((err)=>console.log(err))
    }

    render() {
        const errorMessage = [];
        if (this.state.titleError) {
            errorMessage.push("Le thème doit faire entre 1 et 60 caractères, les caractères spéciaux ($ € { } [ ] ... ) ne sont pas autorisés")
        }
        const formError= errorMessage.length !== 0; //Le formulaire a une erreur si errorMessage a au moins 1 erreure

        return (
            <Form error={formError}  onSubmit={this.onSubmit}>
                <Form.Input
                    type="text"
                    label="Thème Toucan"
                    placeholder="Thème"
                    name="title"
                    onChange={this.onTitleChange}
                    value={this.state.title}
                    error={this.state.titleError}
                    required
                />

                <Form.Input
                    label="PDF du Toucan"
                    onChange={this.onFileChange}
                    name="toucan"
                    accept="application/pdf"
                    type="file"
                    required
                />

                <Form.Input
                    label="Cover du Toucan"
                    onChange={this.onFileChange}
                    name="cover"
                    type="file"
                    accept="image/png, image/jpeg"
                    required
                />
                <DateInput
                    label="Date"
                    localization="fr"
                    name="date"
                    onChange={this.onDateChange}
                    value={this.state.dateShown}
                    required
                />

                <Message error header="Formulaire incomplet" content={
                    <ul>
                        {errorMessage.map((err) => {return <li>{err}</li>})}
                    </ul>
                } />
                <Form.Button disabled={formError} content="C'est parti !" />
            </Form>
        )
    }

}
export default FormToucan