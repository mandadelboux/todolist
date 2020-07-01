import React from 'react';
import ItemLista from '../components/ItemLista/index'


export const ListaDeTarefas = (props) => (
    <div>
      <h1>Lista de Tarefas</h1>
      <input name="inputTarefa" placeholder="Adicone uma tarefa" value={props.inputTarefa} onChange={props.onChange} />
      <button onClick={props.addTarefa}>Adicionar</button>
      <ul>
      {
        props.tarefas.map((tarefa,index) => (
          <li key={index}>
          <ItemLista
            tarefa={tarefa}
            index={index}
            removeTarefa={props.removeTarefa}
            editTarefa={props.editTarefa} />
          </li>  
          ) 
        )
      }
      </ul>
    </div>
  );
export default ListaDeTarefas;