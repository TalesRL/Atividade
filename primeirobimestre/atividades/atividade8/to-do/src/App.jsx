import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [textoTarefa, setTextoTarefa] = useState('')

  function adicionarTarefa(event) {
    event.preventDefault()

    const texto = textoTarefa.trim()

    if (texto === '') {
      return
    }

    const novaTarefa = {
      id: Date.now(),
      text: texto
    }

    setTarefas([...tarefas, novaTarefa])
    setTextoTarefa('')
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id)

    setTarefas(novaLista)
  }

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <form className="nova-tarefa" onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={textoTarefa}
          onChange={(event) => setTextoTarefa(event.target.value)}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.text}</span>

            <button
              className="btn-remover"
              onClick={() => removerTarefa(tarefa.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App