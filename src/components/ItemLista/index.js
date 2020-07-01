import React, { Component }from 'react';


export class ItemLista extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit:false,
            texto: props.tarefa
        }

        this.removeTarefa = () => {
            this.props.removeTarefa(this.props.index);
        }

        this.editTarefa = (index, valor) => {
            this.props.editTarefa(this.props.index, this.state.texto);
            this.setState({edit:false});
        }

        this.abrirForm = () => {
            this.setState({edit:true});
        }

        this.fecharForm = () => {
            this.setState({edit: false})
        }

        this.onChange = event => {
            this.setState({texto: event.target.value})
        }
    }

    render(){
        if(!this.state.edit){
            return(
                <p>{this.props.tarefa}
                <span style={{cursor:"pointer"}} onClick={this.abrirForm}> Alterar</span>
                <span style={{cursor:"pointer", color: "red"}}onClick={this.removeTarefa}> Excluir</span></p>
            )
        }
            return(
                <div>
                <input value={this.state.texto} onChange={this.onChange} />
                <span style={{cursor:"pointer"}} onClick={this.editTarefa}> Salvar</span>
                <span style={{cursor:"pointer"}} onClick={this.fecharForm}> Cancelar</span>
                </div>
            )
        }
    }

export default ItemLista;