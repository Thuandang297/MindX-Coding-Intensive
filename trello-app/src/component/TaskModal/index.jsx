import { Modal, Form, Input, DatePicker, Select, Button, Space } from 'antd';
import { FlagOutlined } from '@ant-design/icons';
import { users, taskStatus } from '../../data';
import './index.css';

const TaskModal = ({ open, onClose, onSave, initialData }) => {
    const [form] = Form.useForm();

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            onSave(values);
            form.resetFields();
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    const statusOptions = taskStatus.map(status => ({
        label: status.name,
        value: status.statusId
    }));

    const userOptions = users.map(user => ({
        label: user.name,
        value: user.userId
    }));

    return (
        <Modal
            title={
                <div className="modal-title">
                    <FlagOutlined className="modal-title-icon" />
                    <span>Save task</span>
                </div>
            }
            open={open}
            onCancel={handleCancel}
            footer={null}
            width={600}
            className="task-modal"
        >
            <Form
                form={form}
                layout="vertical"
                className="task-form"
                initialValues={initialData}
            >
                <div className="form-row">
                    <Form.Item
                        label="Title"
                        name="title"
                        className="form-item"
                        rules={[
                            { required: true, message: 'Title is required' }
                        ]}
                    >
                        <Input
                            placeholder="Type title of task"
                            className="form-input"
                        />
                    </Form.Item>

                    <Form.Item
                        label="End Date"
                        name="deadline"
                        className="form-item"
                        rules={[
                            { required: true, message: 'End date is required' }
                        ]}
                    >
                        <DatePicker
                            format="DD / MM / YYYY"
                            className="form-input"
                        />
                    </Form.Item>
                </div>

                <div className="form-row">
                    <Form.Item
                        label="Description"
                        name="description"
                        className="form-item"
                    >
                        <Input.TextArea
                            placeholder="Type description..."
                            rows={4}
                            className="form-textarea"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Assign"
                        name="assignedTo"
                        className="form-item assign-item"
                    >
                        <Select
                            placeholder="Select user"
                            options={userOptions}
                            className="form-select"
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    label="Status"
                    name="statusId"
                    className="form-item"
                >
                    <Select
                        placeholder="Choose status"
                        options={statusOptions}
                        className="form-select"
                    />
                </Form.Item>

                <Form.Item className="form-actions">
                    <Space className="button-group">
                        <Button
                            onClick={handleCancel}
                            className="cancel-btn"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            onClick={handleSave}
                            className="save-btn"
                        >
                            Save
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default TaskModal;
