import Card from "../Card";
import "./index.css"

const Column = (props) => {
    const { columnName, tasksCount, tasks } = props;
    return <>
        <div className="column-component">
            <div className="header">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '21px' }}>
                    <p>{columnName}</p>
                    <div className="count-task">
                        <p>{tasksCount}</p>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap:'6px' }}>
                    <div className="count-task">
                        +
                    </div>
                    <div className="count-task">
                        ...
                    </div>
                </div>
            </div>
            <div className="content">
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
    </>
}
export default Column;