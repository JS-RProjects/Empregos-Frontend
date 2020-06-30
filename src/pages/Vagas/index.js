import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { FaTrashAlt } from 'react-icons/fa';

export default function Vagas({ history }){
    const [area,setArea] = useState('');
    const [city,setCidade] = useState('');
    const [uf,setUF] = useState('');
    const [profileid,setEmpresa] = useState('');
    const [salario_min,setSalario] = useState(0);
    const [vagas,setVagas] = useState(Array());

    let c;

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const headers = {
        area,
        city,
        uf,
        profileid,
        salario_min
    }
    useState(async () => {
        c = await api.get('/vagas',{
            headers: headers
        });
        setVagas(c.data); 
    },[]);

    return (
        <>
            <div className="principal">
                <div className="filter-bar">
                    <a className="title" onClick={() => history.push('/')}>Empregos++;</a>
                    <div className="filtros">
                        <p>FILTROS</p>
                        <label>ÁREA *</label>
                        <input type="text" className="filter-input" onChange={event => setArea(event.target.value)}/>

                        <label>CIDADE *</label>
                        <input type="text" className="filter-input"onChange={event => setCidade(event.target.value)}/>
                        
                        <label>UF *</label>
                        <input type="text" className="filter-input"onChange={event => setUF(event.target.value)}/>

                        <label>EMPRESA (ID DO PERFIL) *</label>
                        <input type="number" className="filter-input"onChange={event => setEmpresa(event.target.value)}/>

                        <label>SALÁRIO MINIMO *</label>
                        <input type="number" className="filter-input"onChange={event => setSalario(event.target.value)}/>

                        <button onClick={async () => {
                            c = await api.get('/vagas',{
                                headers: headers
                            });

                            setVagas(c.data); 
                        }}>FILTRAR</button>
                    <button onClick={() => history.push('/vagas/new')} style={{marginTop: '10px'}}><strong>CRIAR VAGA</strong></button>
                    </div>
                </div>
                <div className="vagas">
                    {vagas ? vagas.map((item) => (
                        <div className="vaga" key={item._id}>
                            <img src={item.thumbnail_url} width="150px" height="150px" alt="profile"/>
                            <div className="div-vaga">
                                <div className="vaga-content">
                                    <p><strong>EMPRESA:</strong> <a className="empresalink" href={`/empresa/${item.profileid}`}>Vá até a empresa</a></p>
                                    <p className="nome"><strong>NOME:</strong> {item.name}</p>
                                    <p className="area"><strong>ÁREA:</strong> {item.area}</p>
                                    <p className="salario"><strong>SALÁRIO:</strong> {formatter.format(item.salario)}</p>
                                    <p className="cidade"><strong>CIDADE:</strong> {item.city}</p>
                                    <p className="uf"><strong>UF:</strong> {item.uf}</p>
                                    <p className="description"><strong>DESCRIÇÃO:</strong> {item.description}</p>
                                </div>
                                <FaTrashAlt onClick={() => history.push(`/vagas/del/${item._id}`)} className="trash" size="33px"/>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </div>
        </>
    );
}