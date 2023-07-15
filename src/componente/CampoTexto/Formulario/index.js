import { useState } from 'react';
import CampoTexto from '..';
import Botao from '../../Banner/Botao';
import ListaSuspensa from '../../ListaSuspensa/Index';
import './Formulario.css'

const Formulario = (props) => {


    const Riparatore = [
        'Autorizzato',
        'Auto Officina',
        'Rivenditore',
        'Grossista',
        'Gommista',
        'Carrozziere',
        'Auto Tuning'
    ]

    const [nome, setNome] = useState('')
    const [partitaivacf, setPartitaIvaCF] = useState('')
    const [email, setEmail] = useState('')
    const [ricambi, setRiparatore] = useState('')
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            partitaivacf,
            email,
            Riparatore
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Iscriviti gratutitamente e accedi al catalogo ricambi</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digita il nome della tua azienda"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Partita Iva/C.F."
                    placeholder="Digita la tua partita iva o il C.F."
                    aoAlterado={valor => setPartitaIvaCF(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="E-mail"
                    placeholder="Digita il tuo indirizzo e-mail"
                    aoAlterado={valor => setEmail(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Riparatore" 
                    itens={Riparatore} 
                    valor={ricambi}
                    aoAlterado={valor => setRiparatore(valor)}
                />
                <Botao>
                    REGISTRATI
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;