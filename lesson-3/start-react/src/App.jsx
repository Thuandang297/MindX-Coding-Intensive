import Column from './component/Column'
import SearchArea from './component/SearchArea'
import { tasks } from './data'
import './App.css'
import { useState, useEffect } from 'react';
import LoginPage from './component/Login';

function App() {


  //Lưu dữ liệu danh sách tasks
  const [taskList, setTaskList] = useState([]);
  console.log("🚀 ~ App ~ taskList:", taskList)

  //Lưu dữ liệu danh sách trạng thái của task
  const [tasksStatusList, setTaskStatusList] = useState([])
  console.log("🚀 ~ App ~ tasksStatusList:", tasksStatusList)


  //Tạo useEffect để load dữ liệu danh sách task từ api :https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=6974d253912a2afb2f310cde

  //Gọi mỗi lần component được rerender
  // useEffect(() => { })


    //Gọi API lấy dữ liệu danh sách task (công việc)
   const getTasksData = async () =>{
    const urlGetTasks = 'https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=6974d253912a2afb2f310cde'
    const response =await fetch(urlGetTasks);
    const responseData = await response.json();
    setTaskList(responseData.data.data);
   } 

   //Gọi API lấy dữ liệu danh sách statusList (trạng thái của công việc)
   const getTaskStatusData = async () => {
    const statusResponse = await fetch('https://mindx-mockup-server.vercel.app/api/resources/taskStatus?apiKey=6974d253912a2afb2f310cde');
    const response = await statusResponse.json();
    setTaskStatusList(response.data.data);
   }

  //Gọi 1 lần đầu tiên khi component được mount 
  useEffect(() => {
    getTasksData();
    getTaskStatusData();
   }, [])

  //Gọi mỗi khi state taskList thay đổi
  // useEffect(() => { }, [taskList])

  return (
    <div className="app-container">
      {/* <SearchArea />
      <div className="board-content">
        {
        tasksStatusList.map(column => <Column 
          columnName={column.name} 
          tasks={taskList.filter(item => item.statusId == column.statusId)}/>)
        }
      </div> */}
      <LoginPage/>
    </div>
  )
}

export default App
