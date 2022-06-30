import React from "react";

class Content extends React.Component {
    
    render() {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
        return (
        <>
        {conteudos.map((conteudo) => {
            return `O conteúdo é: ${conteudo.conteudo}Status:${conteudo.status} Bloco:${conteudo.bloco}`
            
        })}
        </>
        );    
}
}

export default Content;