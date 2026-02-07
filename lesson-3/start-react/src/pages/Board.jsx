import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import Column from '../component/Column';
import SearchArea from '../component/SearchArea';
import TaskModal from '../component/TaskModal';
import './index.css';
function Board() {


    const [searchParams, _] = useSearchParams();
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (searchParams.get('open') === 'create') {
            setModalOpen(true)
        }
    }, [searchParams,setModalOpen])
    //Lưu dữ liệu danh sách tasks
    const [taskList, setTaskList] = useState([]);

    //Lưu dữ liệu danh sách trạng thái của task
    const [tasksStatusList, setTaskStatusList] = useState([])

    //Tạo useEffect để load dữ liệu danh sách task từ api :https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=6974d253912a2afb2f310cde

    //Gọi API lấy dữ liệu danh sách task (công việc)
    const getTasksData = async () => {
        const urlGetTasks = 'https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=6974d253912a2afb2f310cde'
        const response = await fetch(urlGetTasks);
        const responseData = await response.json();
        console.log("🚀 ~ getTasksData ~ responseData:", responseData)
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
        (async () => {
            await getTasksData();
            await getTaskStatusData();
        })()
    }, [])

    const handleCloseModal = () => {
        setModalOpen(false);
        navigate(-1);
    };

    const handleSaveTask = () => {
        setModalOpen(false);
    };
    return (
        <div className="app-container">
            <SearchArea />
            <div className="board-content">
                {
                    tasksStatusList.map(column => <Column
                        columnName={column.name}
                        tasks={taskList.filter(item => item.statusId == column.statusId)} />)
                }
            </div>
            <TaskModal
                open={modalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTask}
            />
        </div>
    )
}

export default Board
