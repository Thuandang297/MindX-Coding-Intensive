import Column from './component/Column'
import SearchArea from './component/SearchArea'
import { tasks, taskStatus } from './data'
import './App.css'
function App() {
  return (
    <>
      <SearchArea />
      <div className="board-content">
        {
          taskStatus.map(task => <Column key={task.statusId} tasks={tasks.filter(item => item.statusId === task.statusId)} columnName={task.name} tasksCount={tasks.filter(item => item.statusId === task.statusId).length} />)
        }
      </div>

    </>
  )
}

export default App
