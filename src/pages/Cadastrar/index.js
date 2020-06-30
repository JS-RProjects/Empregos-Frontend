import React, { useState,useMemo } from 'react';
import api from '../../services/api';
import './styles.css';
import camera from '../../assets/icons8-camera.png';

export default function Cadastrar({ history }){
    const [thumbnail, setThumbnail] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
    const [uf, setUF] = useState('');
    const [cidade, setCidade] = useState('');
    const [description, setDescription] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },[thumbnail]);

    async function handleSubmit(event){
        event.preventDefault();

        const data = new FormData();
        
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('city', cidade);
        data.append('uf', uf);
        data.append('thumbnail', thumbnail);
        data.append('description',description);

        const login = await api.post('/pessoa/create',data);
        console.log(login.data);

        localStorage.clear();
        localStorage.setItem('pessoaid',login.data._id);
        localStorage.setItem('profileid',login.data.profileId);

        history.push(`/pessoa/${login.data.profileId}`);
    }

    // let cities = [];
    // let cidades  = [];

    // function get_cities(uf){
    //     let c = [];

    //     for (let i = 0; i < array_cities.length; i++){
    //         if (array_cities[i][0] == uf){
    //             let b = array_cities[i][1];

    //             for (let x = 0; x < b.length; x++){
    //                 c.push(b[x][0]);
    //             }

    //             // return c;
    //         }
    //     }

    //     cities = c;
    // }

    // function change_cities(){
    //     let items = [];
    //     for (let i = 0; i < cities.length; i++){
    //         for (let x = 0; x <= cities.length; x++){
    //             items.push(`<option value={${cities[x]}}>${cities[x]}</option>`);
    //         }
    //     }

    //     cidades = items;

    //     // return items;

    //     // cities.map((item, i) => {
    //     //         return ($("#cidades").append('<option key={i} value={item}>{item.name}</option>'));
    //     // });

    //     // return lista_cidade
    // }

    return (
        <>
            <div className="container2">
                <form onSubmit={handleSubmit}>
                    <a className="title" href="/">Empregos++;</a>
                    
                    <label 
                        id="thumbnail" 
                        style={{ backgroundImage: `url(${preview})`, backgroundSize: 'cover'}}
                        required
                    >
                        <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                        <img src={camera} alt="Select image"/>
                    </label>
                    <label htmlFor="text">NOME *</label>
                    <input type="text" name="name" className="input" required onChange={event => {setName(event.target.value)}}/>
                    <label htmlFor="email">EMAIL *</label>
                    <input type="email" name="email" required className="input" onChange={event => {setEmail(event.target.value)}}/>
                    <label htmlFor="password">SENHA *</label>
                    <input type="password" name="pass" required className="input" onChange={event => {setPass(event.target.value)}}/>

                    <label htmlFor="text">DESCRIÇÃO *</label>
                    <input type="text" name="name" className="input" required onChange={event => {setDescription(event.target.value)}}/>

                    <label>UF *</label>
                    <input type="text" name="uf" className="input" required onChange={event => {setUF(event.target.value)}}/>
                    <label>CIDADE *</label>
                    <input type="text" name="cidade" className="input" required onChange={event => {setCidade(event.target.value)}}/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </>
    );
}