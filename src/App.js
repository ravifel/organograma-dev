import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF"
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2"
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5"
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9"
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF"
    }
  ]

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

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
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
