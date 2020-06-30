import React from 'react';
import './styles.css';

export default function PageNotFound(){
    return (
        <div className="container3">
            <div className="container2">
                <a className="title" href="/">ERRO <strong>404</strong></a>
                <p className="description">Está página <strong>não existe</strong>, por favor volte a <strong>página inicial.</strong></p>

            </div>
        </div>
    );
}