import React from 'react'
import Colaborador from '../Colaborador'
import "./Time.css"
import hexToRgba from 'hex-to-rgba'

const Time = (
    {
        time,
        colaboradores,
        aoFavoritar,
        aoDeletar,
        mudarCor
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
                <input
                    type='color'
                    className='input-cor'
                    value={time.cor}
                    onChange={evento => mudarCor(evento.target.value, time.id)}
                />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

                <div className='colaboradores'>
                    {colaboradores.map(
                        (colaborador, indice) =>
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoFavoritar={aoFavoritar}
                                aoDeletar={aoDeletar}
                            />
                    )}
                </div>
            </section>
            : '' //AQUI PODERIA ENTRAR UM COMPONENTE INFORMANDO QUE ESTÁ VAZIO
    )
}

export default Time
