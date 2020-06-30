import React from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import './styles.css';

export default function Home({ history }){
    return (
        <>
            <div className="container2">
                <a className="title" href="#">Empregos++;</a>
                <p className="description">Plataforma de busca de <strong style={{ borderBottom: '3px solid #FFF', cursor: 'pointer' }} onClick={() => history.push('/vagas')}>vagas</strong> de <strong>emprego</strong>, com várias <strong>tecnologias</strong> e <strong>filtros</strong> para manter sua <strong>segurança</strong> e <strong>conforto</strong> enquanto usa nossa plataforma.</p>
                <div className="buttons-div">   
                    <div className="pessoa">
                        <p className="pessoa-desc">Para <strong>você</strong> que está procurando um <strong>trabalho</strong></p>
                        <button 
                            className="pessoa-btn" 
                            onClick={() => { history.push('login') }}
                        >
                            Logar
                        </button>
                        <button 
                            className="pessoa-btn" 
                            onClick={() => { history.push('cadastrar') }}
                        >
                            Cadastrar
                        </button>
                    </div>
                    <div className="empresa">
                        <p className="pessoa-desc">Para sua <strong>empresa</strong> publicar <strong>vagas</strong> de <strong>emprego</strong></p>
                        <button 
                            className="pessoa-btn" 
                            onClick={() => { history.push('empresa/login') }}
                        >
                            Logar
                        </button>
                        <button 
                            className="pessoa-btn" 
                            onClick={() => { history.push('empresa/cadastrar') }}
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>

            </div>
            <footer className="rodape">
                <p className="copyright">Copyright (c) 2020 <strong>Empregos++;</strong></p>
                <a href="https://github.com/ReddyyZ" target="_blank" rel="noopener noreferrer"><AiFillGithub color="#FFF" size="50px" style={{marginRight:"8px"}} /></a>
                <a href="https://twitter.com/Arthurzin__" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter color="#FFF" size="50px" /></a>
            </footer>
        </>
    );
}