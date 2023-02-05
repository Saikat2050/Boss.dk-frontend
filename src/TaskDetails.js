import { useParams, Link } from 'react-router-dom'
import data from './data.json'

const DetailTask = () => {

    let { id } = useParams()
    id = id.replace(/:/g, '')

    const editURI = (id) => {
        return `/edit-task/${id}`
    }

    const deleteURI = (id) => {
        alert(`Do you really want to Delete Task ${id}`)
    }

    return (
        <div className="DetailTask">
            <div className='Details-Heading'>
                <h2>Task Details</h2>
            </div>
            <div className="Detail-Body">
                <p>Task: <strong>{data[0].task}</strong> </p>
                <p>Description: {data[0].description}</p>
                <p>Date: {data[0].scheduledDate}</p>
                <p>Priority: {data[0].priority}</p>
                <p>Status: {data[0].currentStatus}</p>
                <p>Assign By: {data[0].assignBy}</p>
                <div>
                    <Link type='button' to={editURI(data[0].id)} class="btn btn-link"><i className="fa-solid fa-pencil fa-fw"></i></Link>
                    <button onClick={(el) => deleteURI(data[0].id)} class="btn btn-link"><i className="fa-solid fa-trash fa-fw"></i></button>
                </div>
            </div>
        </div>
    );
}

export default DetailTask;