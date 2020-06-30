import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function CriarVaga({ match,history }){
    const vaga_id = match.params.vaga_id;
    const empresaid = localStorage.getItem('empresaid');
    const profileid  = localStorage.getItem('profileid');

    const [name,setName] = useState('');
    const [area,setArea] = useState('');
    const [description,setDescription] = useState('');
    const [salario,setSalario] = useState(0);

    const [erro,setErro] = useState('');
    const [sucesso,setSucesso] = useState('');
    // setErro("ERRO: Você deve estar logado como uma empresa!");
    async function handleSubmit(event){
        event.preventDefault();
        const response = await create_vaga();
    }

    async function create_vaga(event){
        event.preventDefault();
        let empresa;

        try{
            empresa = await api.get(`/empresa/${profileid}`);
        } catch {
            setErro("ERRO: Você deve estar logado como uma empresa!");

            setTimeout(() => {
                setErro("");
            },3000);

            return false;
        }

        if (empresaid !== empresa.data._id){
            setErro("ERRO: Você deve estar logado como uma empresa!");
            
            setTimeout(() => {
                setErro("");
            },3000);

            return false;
        }

        const data = {
            name,
            area,
            description,
            salario,
        }

        const headers = {
            thumbnail: empresa.data.thumbnail,
            city: empresa.data.city,
            uf: empresa.data.uf,
            empresa_id: empresaid,
        }

        try{
            const response = await api.post('/vagas/new',data,{
                headers: headers
            });
            
            if (response.status == 200){
                setSucesso("SUCESSO: Vaga criada com sucesso!");

                setTimeout(() => {
                    setSucesso("");
                },3000);
            }

            return response;
        } catch {
            setErro("ERRO: Não foi possivel criar a vaga");
            setTimeout(() => {
                setErro("");
            },3000);
        }
    }

    return (
        <>
            <div className="container2">
                <form onSubmit={create_vaga}>
                    <a className="title" href="/" onClick={() => {history.push('/')}}>Empregos++;</a>
                    
                    <label className="erro" >{erro}</label>
                    <label className="sucesso" >{sucesso}</label>

                    <label htmlFor="text">NOME *</label>
                    <input type="text" className="input" required onChange={event => {setName(event.target.value)}}/>

                    <label htmlFor="email">ÁREA *</label>
                    <input type="text" required className="input" onChange={event => {setArea(event.target.value)}}/>

                    <label htmlFor="password">DESCRIÇÃO *</label>
                    <input type="text" required className="input" onChange={event => {setDescription(event.target.value)}}/>

                    <label htmlFor="number">SALÁRIO *</label>
                    <input type="number" className="input" required onChange={event => {setSalario(event.target.value)}}/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    );
}