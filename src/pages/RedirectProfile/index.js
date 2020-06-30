import React from 'react';

export default function RedirectProfile({ history }){
    const profileid = localStorage.getItem('profileid');
    const pessoaid = localStorage.getItem('pessoaid');
    const empresaid = localStorage.getItem('empresaid');

    if (!pessoaid && empresaid && profileid){
        history.push(`/empresa/${profileid}`);
    } else if (!empresaid && pessoaid && profileid) {
        history.push(`/pessoa/${profileid}`);
    } else {
        history.push('/');
    }

    return (
        <>
        </>
    );
}