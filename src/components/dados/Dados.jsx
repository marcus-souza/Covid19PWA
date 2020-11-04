import React, { Component } from 'react'
import Main from '../template/Main'
import axios from 'axios'
import Select from 'react-select'

const headerProps = {
    icon: 'database',
    title: 'Dados',
    subtitle: 'Estatísticas por Estado'
}

const baseUrl = 'https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/PortalEstadoRegiao'
const initialState = {
    estado: { "_id": '',
    "casosAcumulado": '',
    "obitosAcumulado": '',
    "metropolitana": ''},
    list: []
}

const options = [
    {"label": "Acre", "value": "AC"},
    {"label": "Alagoas", "value": "AL"},
    {"label": "Amapá", "value": "AP"},
    {"label": "Amazonas", "value": "AM"},
    {"label": "Bahia", "value": "BA"},
    {"label": "Ceará", "value": "CE"},
    {"label": "Distrito Federal", "value": "DF"},
    {"label": "Espírito Santo", "value": "ES"},
    {"label": "Goiás", "value": "GO"},
    {"label": "Maranhão", "value": "MA"},
    {"label": "Mato Grosso", "value": "MT"},
    {"label": "Mato Grosso do Sul", "value": "MS"},
    {"label": "Minas Gerais", "value": "MG"},
    {"label": "Pará", "value": "PA"},
    {"label": "Paraíba", "value": "PB"},
    {"label": "Paraná", "value": "PR"},
    {"label": "Pernambuco", "value": "PE"},
    {"label": "Piauí", "value": "PI"},
    {"label": "Rio de Janeiro", "value": "RJ"},
    {"label": "Rio Grande do Norte", "value": "RN"},
    {"label": "Rio Grande do Sul", "value": "RS"},
    {"label": "Rondônia", "value": "RO"},
    {"label": "Roraima", "value": "RR"},
    {"label": "Santa Catarina", "value": "SC"},
    {"label": "São Paulo", "value": "SP"},
    {"label": "Sergipe", "value": "SE"},
    {"label": "Tocantins", "value": "TO"}
    ]
  

export default class Dados extends Component {

    state = {...initialState}

    constructor(props) {
        super(props)
        
        this.setEstado = this.setEstado.bind(this)
        
    } 

    

    getEstados() {
        const method = 'get'
        axios[method](baseUrl)
        .then(resp => {
            this.state.list = resp.data
            console.log(this.state.list)
        })
        
    }

    setEstado(e) {
        console.log(e)
        this.setState({estado: e.target.value})
        //console.log(estado)
    }

    getDadosEstado(props) {
        axios.get(baseUrl, props)
        .then(
            resp => {
                console.log(resp)
            }
        )
    }

    render() {
        const { _id, casosAcumulado, obitosAcumulado } = this.state
        this.getEstados()
        const estado = this.initialState
        return (
            <Main {...headerProps}>
                <Select options = {options} onChange={this.setEstado} />
                <h1>{estado}</h1>
            </Main>
        )
    }
}