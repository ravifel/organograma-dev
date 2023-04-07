import React from 'react'
import "./Colaborador.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = (
    {
        colaborador,
        corDeFundo,
        aoFavoritar
    }
) => {

    const favoritar = () => {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4 style={{ textTransform: 'uppercase' }}>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavorito} color='red' />
                        : <AiOutlineHeart {...propsFavorito} />}</div>
            </div>
        </div>
    )
}

export default Colaborador
