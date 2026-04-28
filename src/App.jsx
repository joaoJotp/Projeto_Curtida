import { useState } from 'react'
import './App.css'

export default function App() {
    const [curtidas, setCurtidas] = useState(0)

    function Like() {
        setCurtidas(curtidas + 1)
    }

    function Deslike() {
        if (curtidas > 0)
            setCurtidas(curtidas - 1)
    }

    function Zerar() {
        return (
            setCurtidas(curtidas => 0)
        )
    }

    return (
        <div className='hero'>
            <h1>Aceita uma curtida ai?</h1>
            <p>Curtidas: {curtidas}</p>
            <div className='btns'>
                <button onClick={Like}>Like</button>
                <button onClick={Zerar}>Zerar</button>
                <button onClick={Deslike}>Deslike</button>
            </div>
        </div>
    )

}