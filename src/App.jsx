import settingsImg from './imgs/settings.svg'
import plusImg from './imgs/plus.svg'

export function App() {
  return (
    <>
      <header>
        <h1>ToDo RDG</h1>
        <button>
          <img src={settingsImg} alt="Settings" />
        </button>
      </header>
      <main>
        <section>
          <header>
            <h2>Hoje</h2>
            <img src={plusImg} alt="Add Task" />
          </header>
          <div class="tarefas">
            <ul>Tarefa</ul>
            <ul>Tarefa</ul>
            <ul>Tarefa</ul>
          </div>
        </section>
        <section>
        <header>
            <h2>Próximas Tarefas</h2>
            <img src={plusImg} alt="Add Task" />
          </header>
          <div class="tarefas">
            <ul>Tarefa<p>17/07/2022</p></ul>
            <ul>Tarefa<p>17/07/2022</p></ul>
            <ul>Tarefa<p>17/07/2022</p></ul>
          </div>
        </section>
      </main>
    </>
  )
}