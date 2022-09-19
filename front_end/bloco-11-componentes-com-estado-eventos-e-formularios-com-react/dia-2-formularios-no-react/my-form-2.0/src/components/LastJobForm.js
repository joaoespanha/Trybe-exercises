import React from "react";

class LastJobForm extends React.Component {
    constructor() {
        super();
        this.state ={
            position:'',
            description:'',
            resume:'',
        };
    }
    
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({
            [name]:value
        })
    }
    handleMouseEnter = ({target}) => {
        global.alert('Preencha com cuidado esta informação.')
    }
    
    render() {
        return (
            <fieldset>
                <div className="input-contaier">
                    <label htmlFor="resume">Cargo
                        <textarea 
                        name="resume" 
                        onChange={this.handleChange} 
                        id="position"
                        maxLength='1000'
                        required
                        value={this.state.resume}></textarea>
                    </label>

                </div>
                <div className="input-contaier">
                    <label htmlFor="position">Cargo
                        <input 
                        name="position"
                        onMouseEnter={this.handleMouseEnter}
                        required
                        onChange={this.handleChange} 
                        id="position" 
                        value={this.state.position}></input>
                    </label>

                </div>
                <div className="input-contaier" >
                    <label htmlFor="description">Descricao
                        <textarea 
                        name="description" 
                        id="description" 
                        onChange={this.handleChange} 
                        required
                        value={this.state.description}></textarea>
                    </label>
                </div>    
                    
            </fieldset>
        )
    }
}
export default LastJobForm;