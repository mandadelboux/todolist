import React from 'react';
import ListaDeTarefas from '../../pages/ListaDeTarefas'
// import ItemLista, {  } from "../ItemLista/index";

export class ListaContainer extends React.Component {
    constructor(){
      super();
      this.state = {
        tarefas: [],
        inputTarefa: ""
      };
  
      this.addTarefa = (event) => {
        event.preventDefault();
        const tarefas = this.state.tarefas.slice();
        tarefas.push(this.state.inputTarefa);
        this.setState({
          tarefas: tarefas,
          inputTarefa: ""
        });
      };

      this.editTarefa = (index, valor) => {
        const tarefas = this.state.tarefas.slice();
        tarefas[index] = valor;
        this.setState({tarefas});
      }

      this.removeTarefa = (index) => {
        const tarefas = this.state.tarefas.slice();
        tarefas.splice(index,1);
        this.setState({tarefas});
      }
      this.onChange = (event) => {
        event.preventDefault();
        const state = Object.assign({},this.state);
        state[event.target.name] = event.target.value;
        this.setState(state);
      };
    }
      render(){
        return(
          <ListaDeTarefas
            tarefas = {this.state.tarefas}
            inputTarefa= {this.state.inputTarefa}
            onChange={this.onChange}
            addTarefa={this.addTarefa}
            removeTarefa={this.removeTarefa}
            editTarefa={this.editTarefa} />

        )
      }
    }

export default ListaContainer;