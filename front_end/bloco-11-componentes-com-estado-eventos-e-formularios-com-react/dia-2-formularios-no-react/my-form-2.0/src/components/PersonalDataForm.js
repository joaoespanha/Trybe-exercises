import React from "react";

const INITIAL_STATE = {
        name: '',
        email:'',
        cpf:'',
        adress:'',
        city:'',
        uf:'',
        homeType: '',
}

const states = ['RJ', 'BSB', 'SP', 'MG', 'RS']

class PersonalDataForm extends React.Component {
    constructor() {
        super();
        this.handleChange =this.handleChange.bind(this);
        this.state = INITIAL_STATE;
    }
    
    handleChange({target}) {
        const { name } = target;
        let { value } = target;
        if (name === 'name') value = value.toUpperCase();
        this.setState({
            [name]:value,
        })
    }
    
    render() {
        return(
            <fieldset>
                <label htmlfor='name'>Name:
                    <input onChange={this.handleChange} maxLength='40' name='name' value={this.state.name} type='text' ></input>
                </label>
                <label htmlfor='email'>Email:
                    <input 
                    id='email' 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    name='email'
                    maxLength='50'
                    type='email' ></input>
                </label>
                <label htmlfor='cpf'>Cpf:
                    <input 
                    id='cpf' 
                    value={this.state.cpf} 
                    name='cpf'
                    type='text' ></input>
                </label>
                <label htmlFor='adress'>Endereco
                    <input 
                    id='adress'
                    value={this.state.adress}
                    onChange={this.handleChange} 
                    type='text' 
                    name="adress" 
                    ></input>
                </label>
                <label htmlFor="uf">Estado
                    <select id="uf" name='uf' value={this.state.uf} onChange={this.handleChange}>
                        {
                            states
                            .map((state, key) => <option key={key}>{state}</option>)
                        }
                    </select>
                </label>

            </fieldset>
        )
    }


}

export default PersonalDataForm;