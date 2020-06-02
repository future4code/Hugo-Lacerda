import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [contadorPosts, setContadorPosts] = useState(0);
  const [alerta, setAlerta] = useState(false);

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista

    if(inputValue !== ''){
      setAlerta(false)
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    const newPostsList = [newPost, ...postsList];

    setPostsList(newPostsList);
    setInputValue('');
    setContadorPosts(contadorPosts + 1);
  }
  else{
    setAlerta(true)
  }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
        {alerta ? <p>NÃO É PERMITIDO POST VAZIO</p> : <></>}
      </div>
      <br />
  {contadorPosts > 0 ? <p>Quantidade de posts: {contadorPosts}</p> : <></>}
      <br />
      {postsList.length > 0 ? postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      }) : <p>Nenhum post</p>}
    </div>
  );
};

export default App;
