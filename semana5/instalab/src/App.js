import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/200/50/50'}
          fotoPost={'https://picsum.photos/id/427/200/150'}
        />
        <Post
          nomeUsuario={'louisinha'}
          fotoUsuario={'https://picsum.photos/id/106/50/50'}
          fotoPost={'https://picsum.photos/id/222/200/150'}
        />
        <Post
          nomeUsuario={'pedrinha'}
          fotoUsuario={'https://picsum.photos/id/187/50/50'}
          fotoPost={'https://picsum.photos/id/268/200/150'}
        />
      </div>
    );
  }
}

export default App;
