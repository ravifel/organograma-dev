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
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[0].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[0].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[0].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[0].nome
    },
    {
      nome: 'Ravi Felipe Silva',
      cargo: 'Desenvolvedor de software',
      imagem: 'https://github.com/ravifel.png',
      time: times[1].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[1].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[1].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[1].nome
    },
    {
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[2].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[2].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[2].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[2].nome
    },
    {
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[3].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[3].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[3].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[3].nome
    },
    {
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[4].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[4].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[4].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[4].nome
    },
    {
      nome: 'Nina Moraes',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[5].nome
    },
    {
      nome: 'Ângelo Soares',
      cargo: 'Engenheiro de Software',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[5].nome
    },
    {
      nome: 'Clara Ferraz',
      cargo: 'Desenvolvedora Python e JavaScript',
      imagem: 'https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_960_720.png',
      time: times[5].nome
    },
    {
      nome: 'Murilo Batista',
      cargo: 'Hipster e CEO',
      imagem: 'https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        cadastrarTime={cadastrarTime}
      />
      {times.map(
        time =>
          <Time
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              colaborador => colaborador.time === time.nome
            )}
          />
      )}
      <div>
        <Rodape />
      </div>

    </div>
  );
}

export default App;
