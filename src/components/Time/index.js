import React from 'react'
import Colaborador from '../Colaborador'
import "./Time.css"
import hexToRgba from 'hex-to-rgba'

const Time = (
    {
        time,
        colaboradores
    }
) => {
    return (
        //RENDERIZAÇÃO CONDICIONAL -> 
        //CASO ESSA CONDIÇÃO SEJA "TRUE" A SESSÃO VAI FICAR VISIVEL.
        (colaboradores.length) > 0 ?
            <section
                className='time'
                style={{ backgroundColor: hexToRgba(time.cor, 0.33) }}
            >
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

                <div className='colaboradores'>
                    {colaboradores.map(
                        (colaborador, indice) =>
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                            />
                    )}
                </div>
            </section>
            : '' //AQUI PODERIA ENTRAR UM COMPONENTE INFORMANDO QUE ESTÁ VAZIO
    )
}

export default Time
