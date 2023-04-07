import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ravi Felipe Silva',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/ravifel.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  //CADASTRAR NOVO COLABORADOR
  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  //CADASTRAR NOVO TIME
  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  //FAVORITAR COLABORADOR
  const resolverFavorito = (id) => {
    setColaboradores(
      colaboradores.map(
        colaborador => {
          if (colaborador.id === id)
            colaborador.favorito = !colaborador.favorito
          return colaborador;
        }

      )
    )
  }

  //DELETAR COLABORADOR
  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(
      colaborador => colaborador.id !== id
    ))
  }



  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        cadastrarTime={cadastrarTime}
      />
      <section className='times'>
        <h1>Minha Organização</h1>
        {times.map(
          (time, indice) =>
            <Time
              key={indice}
              time={time}
              colaboradores={colaboradores.filter(
                colaborador => colaborador.time === time.nome
              )}
              aoFavoritar={resolverFavorito}
              aoDeletar={deletarColaborador}
            />
        )}
      </section>
      <div>
        <Rodape />
      </div>

    </div>
  );
}

export default App;
