import React from 'react';
import './styles.css';
import api from '../../services/api';
import swal from 'sweetalert';

export default function DelVaga({ history,match }){
    const vagaid = match.params.vaga_id;
    const empresaid = localStorage.getItem('empresaid');

    async function delete_vaga(){
        try{
            await api.delete(`/vagas/del/${vagaid}`,{
                headers: {
                    empresa_id: empresaid
                }
            });

            swal({
                icon: 'success',
                title: 'SUCCESS!',
                text: 'Vaga deletada com sucesso!',
                buttons: {
                    Ok: {
                        text: 'Ok',
                        value: 'ok',
                    },                    
                }
            }).then((value) => {
                if (value == 'ok'){
                    history.push('/vagas');
                }
            });
        } catch {
            swal({
                icon: 'error',
                title: 'ERROR - 400 CODE',
                text: 'Erro ao deletar vaga: ID da Vaga/ID da Empresa inválido!',
                buttons: {
                    Ok: {
                        text: 'Ok',
                        value: 'ok',
                    },                    
                }
            }).then((value) => {
                if (value == 'ok'){
                    history.push('/vagas');
                }
            });
        }
    }

    delete_vaga();

    return (
        <>
        </>
    );
}