import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from "antd";
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import TaskModal from '../TaskModal';

const SearchArea = ({ onAddTask }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSaveTask = (values) => {
        if (onAddTask) {
            onAddTask(values);
        }
        setModalOpen(false);
    };



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
                        onChange={(e) => {
                            navigate(`/board?searchVal=${e.target.value}`)
                        }}
                    />
                </div>
                <Link to={'/board?open=create'}>
                    <Button
                        type="primary"
                        size="large"
                        className="new-item-btn"
                    >
                        New Item
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