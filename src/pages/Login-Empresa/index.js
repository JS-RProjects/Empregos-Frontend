import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function LoginEmpresa({ history }){
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [erro,setErro] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        let login = null;

        try{
            login = await api.post('/empresa/login',{
                email,
                password
            });
            
            localStorage.clear();
            localStorage.setItem('empresaid',login.data._id);
            localStorage.setItem('profileid',login.data.profileId);
    
            history.push(`/empresa/${login.data.profileId}`);
        } catch {
            setErro("ERRO: Email/Senha inválida!");
            setTimeout(() => {
                setErro("");
            },3000);
        }

    }

    return (
        <>
            <div className="container2">
            <button style={{background: 'none', cursor: 'pointer'}} className="title" onClick={() => history.push('/')}>Empregos++;</button>
                <form onSubmit={handleSubmit}>
                    <label className="erro" >{erro}</label>
                    <label htmlFor="email">EMAIL *</label>
                    <input type="email" name="email" className="input" onChange={event => {setEmail(event.target.value)}}/>
                    <label htmlFor="password">SENHA *</label>
                    <input type="password" name="pass" className="input" onChange={event => {setPass(event.target.value)}}/>
                    <button type="submit">Logar</button>
                </form>
            </div>
        </>
    );
}