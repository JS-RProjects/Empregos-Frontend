import React, { useState,useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import { FaSignOutAlt,FaTimesCircle,FaArrowLeft } from 'react-icons/fa';
import swal from 'sweetalert';

export default function PerfilEmpresa({ match,history }){
    const profileid = match.params.profileid;
    const [user,setUser] = useState(null);

    const get_user_info = async () => {
        let x = await api.get(`/empresa/${profileid}`);
        setUser(x);
    }
    get_user_info();

    function logout_back(){
        swal({
            title: 'Sair/Voltar',
            text: 'Você deseja sair de sua conta ou voltar?',
            icon: 'success',
            buttons: {
                voltar: {
                    text: 'Voltar',
                    color: 'blue',
                    value: 'voltar',
                    className: 'voltar-btn'
                },
                sair: {
                    text: 'Sair',
                    color: 'red',
                    value: 'sair',
                    className: 'sair-btn'
                }
            }
        }).then((value) => {
            if (value == "voltar"){
                history.push('/');
            } else if (value == "sair") {
                localStorage.clear();
                history.push('/');
            }
        });
    }

    return (
        <>
        <div className="container2">
            <div className="menu" style={{display: 'flex',alignItems: 'flex-start',justifyContent: 'initial',width:'80%'}}>
                <button onClick={logout_back} style={{background: 'transparent', border: 0}}><FaArrowLeft className="arrow-left" size="30px"/></button>
                <p onClick={() => history.push('/vagas')} style={{ borderBottom: '3px solid #FFF', cursor: 'pointer', fontSize: '20px', marginLeft: '20px' }}><strong>VER VAGAS</strong></p>
            </div>
            <div className="profile">
                <div className="img">
                    <img src={user ? user.data.thumbnail_url : '#'} alt="profile" />
                    <div className="name">
                        <label>NOME:</label>
                        <p>{user ? user.data.name : ''}</p>
                    </div>
                    <div className="local">
                        <div className="cidade">
                            <label>CIDADE:</label>
                            <p>{user ? user.data.city : ''} - </p>
                        </div>
                        <div className="uf">
                            <label>UF:</label>
                            <p>{user ? user.data.uf : ''}</p>
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="vagas">
                        <p><strong>VAGAS:</strong>{user ? user.data.vagas : ''}</p>
                    </div>
                    <div className="description">
                        <p>{user ? user.data.description : ''}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}