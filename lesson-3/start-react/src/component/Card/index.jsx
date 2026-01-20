import "./index.css"
import "../../../src/index.css"
import { Button } from 'antd'
const Card = (props) => {
    const {
        title,
        description,
        assignedTo,
        flagId,
    } = props;
    return <>
        <div className="card-item">
            <div className="content-task">
                <div className="title-card">
                    <p>{title}</p>
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <Button className="w-fit" type="primary">{assignedTo}</Button>
            </div>
            <div className="bottom-info">
                {/* <p>{deadline}</p> */}
                <p>{flagId}</p>
            </div>
        </div>
    </>
}

export default Card;