import React from 'react'
import Colaborador from '../Colaborador'
import "./Time.css"

const Time = (props) => {
    return (
        //RENDERIZAÇÃO CONDICIONAL -> 
        //CASO ESSA CONDIÇÃO SEJA "TRUE" A SESSÃO VAI FICAR VISIVEL.
        (props.colaboradores.length) > 0 ?
            <section className='time' style={{ backgroundColor: props.corSecundaria }}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

                <div className='colaboradores'>
                    {props.colaboradores.map(
                        colaborador =>
                            <Colaborador
                                key={colaborador.nome}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                corPrimaria={props.corPrimaria}
                            />
                    )}
                </div>
            </section>
            : '' //AQUI PODERIA ENTRAR UM COMPONENTE INFORMANDO QUE ESTÁ VAZIO
    )
}

export default Time
