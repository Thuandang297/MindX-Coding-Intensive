import "./index.css"
import "../../../src/index.css"
import { Button } from 'antd'
import { LinkOutlined, EditOutlined, ClockCircleOutlined, FlagOutlined } from '@ant-design/icons'
import { users, flags } from '../../data'
import { memo } from "react"

const Card = (props) => {
    const {
        title,
        description,
        assignedTo,
        flagId,
        deadline
    } = props;

    const assignedUser = users.find(u => u.userId === assignedTo);
    const flagData = flags.find(f => f.flagId === flagId);

    const formatDate = (date) => {
        const d = new Date(date);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${months[d.getMonth()]} ${d.getDate()}`;
    };

    return (
        <div className="card-item">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <EditOutlined className="card-edit-icon" />
            </div>

            <p className="card-description">{description}</p>

            <div className="card-assigned">
                <Button
                    type="primary"
                    size="small"
                    className="assigned-badge"
                >
                    {assignedUser?.name || `User ${assignedTo}`}
                </Button>
            </div>

            <div className="card-footer">
                <LinkOutlined className="meta-icon" />
                <span className="meta-text">2</span>

                {flagData && (
                    <FlagOutlined style={{ color: flagData.color }} />
                )}
                <ClockCircleOutlined />
                <span className="meta-text">{formatDate(deadline)}</span>
            </div>
        </div>
    )
}

export default memo(Card);