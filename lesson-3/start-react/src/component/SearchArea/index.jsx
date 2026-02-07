import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";
import { useState } from 'react';
import TaskModal from '../TaskModal';
import { Link, useNavigate } from 'react-router';

const SearchArea = ({ onAddTask }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSaveTask = (values) => {
        if (onAddTask) {
            onAddTask(values);
        }
        setModalOpen(false);
    };

    const handleSearchCard =()=>{
        console.log("Search Card")
    }

    const navigate= useNavigate();
    return (
        <>
            <div className="search-area flex align-center justify-space-between">
                <div>
                    <Input
                        className='search-input w-max-200'
                        placeholder="Search Items"
                        prefix={<SearchOutlined className="search-icon " />}
                        size="large"
                        allowClear
                        onChange={(e)=>{
                            navigate(`/board?searchVal=${e.target.value}`)
                        }}
                    />
                </div>
                <Link to={'/board?open=create'}>
                    <Button
                        type="primary"
                        size="large"
                        className="new-item-btn"
                        // onClick={handleOpenModal}
                    >
                        New Item
                    </Button>
                     <Button
                        type="primary"
                        size="large"
                        className="new-item-btn"
                        onClick={handleSearchCard}
                    >
                        Search
                    </Button>
                </Link>

            </div>

            <TaskModal
                open={modalOpen}
                onClose={handleCloseModal}
                onSave={handleSaveTask}
            />
        </>
    )
}

export default SearchArea;