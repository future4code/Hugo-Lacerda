import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import { CardPequeno } from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://drive.google.com/uc?id=18rR5ALPR7UyoJdfXTKDTxQIix6CyMrah" 
          nome="Hugo Lacerda" 
          descricao="Oi, eu sou o Hugo Lacerda. Sou estudante da Labenu na turma Julian de Web Full-Stack e da Faculdade Impacta de Tecnologia, no primeiro semestre de Banco de Dados."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno texto={'lacerda@lacerda.com'} icone={'https://drive.google.com/uc?id=1M-Bj4AEMi_4KU_QyoNvp07TYkVnBCYTQ'} motivo={'E-mail:'}/>
        <CardPequeno texto={'Rua Lacerda, 311'} icone={'https://image.flaticon.com/icons/svg/1239/1239525.svg'} motivo={'Endereço:'}/>
      </div>

      <div className="page-section-container">
        <h2>Instituições de ensino</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Web Full-Stack." 
        />
        
        <CardGrande 
          imagem="https://drive.google.com/uc?id=1HQXjzFKnCs26Dwo__UX4m4dXmQ-jw5Ef" 
          nome="Faculdade Impacta de Tecnologia" 
          descricao="Banco de Dados." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
