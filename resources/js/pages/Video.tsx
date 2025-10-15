import * as React from 'react';
import Header from '@/components/Header';


export default function Video({titulo, descricao, canal, comentarios}) {


    return (
        <div>
            <Header/>

                <div className = "bg-gray-100 w-230 h-125 ml-15 mt-10 rounded-xl">
                    <video/>
                </div>
        </div>
    );
}
