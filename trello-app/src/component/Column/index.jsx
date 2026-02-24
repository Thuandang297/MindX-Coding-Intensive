import Card from "../Card";
import "./index.css"
import { Button } from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import { memo } from "react";

const Column = (props) => {
    const { columnName, tasks } = props;
    
    return (
        <div className="column-component">
            <div className="column-header">
                <div className="column-title-section">
                    <h2 className="column-title">{columnName}</h2>
                    <span className="column-count">{tasks.length}</span>
                </div>
                <div className="column-actions">
                    <Button 
                        type="text" 
                        size="small" 
                        icon={<PlusOutlined />}
                        className="column-action-btn"
                    />
                    <Button 
                        type="text" 
                        size="small" 
                        icon={<EllipsisOutlined />}
                        className="column-action-btn"
                    />
                </div>
            </div>
            
            <div className="column-content">
                {tasks.map(item => (
                    <Card
                        key={item.taskId}
                        title={item.title}
                        description={item.description}
                        assignedTo={item.assignedTo}
                        flagId={item.flagId}
                        deadline={item.deadline}
                    />
                ))}
            </div>
        </div>
    )
}

export default memo(Column);