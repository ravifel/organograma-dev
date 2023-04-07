import React from 'react'
import "./Colaborador.css"

const Colaborador = (
    {
        colaborador,
        corDeFundo
    }
) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{ textTransform: 'uppercase' }}>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador
