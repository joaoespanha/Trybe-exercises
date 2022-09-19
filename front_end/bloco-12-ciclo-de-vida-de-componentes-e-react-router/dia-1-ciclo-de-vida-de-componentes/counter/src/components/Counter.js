import React from 'react';


class Counter extends React.Component {
    

    componentDidMount() {
        console.log('componentDidMount');
    
      }

    render() {
        const { btnFunc, counter} =this.props;
        return(
            <div>
                <p>{counter}</p>

                <button onClick={btnFunc} >Iniciar Contagem</button>
            
            </div>

        )

    }

}

export default Counter;