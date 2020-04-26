import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filter: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    this.setState({ tarefas: JSON.parse(localStorage.getItem("tarefas")) });
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const identificador = Date.now();

    const novaTarefa = {
      id: identificador,
      texto: this.state.inputValue,
      completa: false,
    };

    let novasTarefas;
    if(this.state.tarefas !== null){
    novasTarefas = [...this.state.tarefas, novaTarefa];
    }else{
      novasTarefas = [novaTarefa];
    }
    const completas = novasTarefas.filter(tarefa=>{
      return tarefa.completa;
    })
    const incompletas = novasTarefas.filter(tarefa=>{
      return !tarefa.completa;
    })

    const tarefasOrdenadas = [...incompletas,...completas];
        
    this.setState({ tarefas: tarefasOrdenadas, inputValue: "" });
  };

  onEnterClick = (e) => {
    if (e.key === "Enter") {
      this.criaTarefa();
    }
  };

  selectTarefa = (id) => {
    this.setState(
      {
        tarefas: this.state.tarefas.map((tarefa) => {
          if (id === tarefa.id) {
            tarefa.completa = !tarefa.completa;
          }
          return tarefa;
        }),
      },
    );

    const completas = this.state.tarefas.filter(tarefa=>{
      return tarefa.completa;
    })
    const incompletas = this.state.tarefas.filter(tarefa=>{
      return !tarefa.completa;
    })

    const tarefasOrdenadas = [...incompletas,...completas];
        
    this.setState({ tarefas: tarefasOrdenadas, inputValue: "" });
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  excluirTarefa = (id) => {

    if (window.confirm("Deseja mesmo excluir esta tarefa?")) {
      this.setState({
        tarefas: this.state.tarefas.filter((tarefa) => {
          return tarefa.id !== id;
        }),
      });
    }
  };

  handleMouseDown = (id) => {
    console.log(id);
    this.mousePressTimer = setTimeout(this.excluirTarefa, 2000, id);
  }

  handleMouseRelease = () => {
    clearTimeout(this.mousePressTimer);
  }

  render(){
    let listaFiltrada;
    if(this.state.tarefas !== null){
    listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filter) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });
  }
  else{
    listaFiltrada = [];
  }

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input
            value={this.state.inputValue}
            onChange={this.onChangeInput}
            onKeyPress={this.onEnterClick}
          />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onMouseDown={() => this.handleMouseDown(tarefa.id)} onMouseUp={this.handleMouseRelease}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
