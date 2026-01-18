import Card from "../Card/Card";
import "./index.css"

const Column = (props) => {
    const { columnName, tasksCount, tasks } = props;
    return <>
        <div className="column-component">
            <div className="header">
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p>{columnName}</p>
                    <p>{tasksCount}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <img src="../assets/icons/more-icon.png" alt="" />
                    <img src="../assets/icons/plus-icon.png" alt="" />
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