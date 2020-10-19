import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import SecaoComentario from './components/SecaoComentario/SecaoComentario';
import IconeComContador from './components/IconeComContador/IconeComContador';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <div>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/60/60'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </div>

        <div>
          <Post
            nomeUsuario={'laei'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/210/160'}
          />
        </div>

        <div>
          <Post
            nomeUsuario={'mor'}
            fotoUsuario={'https://picsum.photos/70/70'}
            fotoPost={'https://picsum.photos/230/180'}
          />
        </div>
      </div>
    );
  }
}

export default App;