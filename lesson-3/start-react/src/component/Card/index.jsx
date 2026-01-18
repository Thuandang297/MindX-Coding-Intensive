import "./index.css"
import "../../../src/index.css"
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
                <p>{assignedTo}</p>
            </div>
            <div className="bottom-info">
                {/* <p>{deadline}</p> */}
                <p>{flagId}</p>
            </div>
        </div>
    </>
}

export default Card;