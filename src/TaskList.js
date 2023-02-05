import data from './data.json'
import {Link} from 'react-router-dom'

const Task = () => {

    const editURI = (id) => {
        return `/edit-task/${id}`
    }

    const detailsURI = (id) => {
        return `/details-task/${id}`
    }
   const deleteURI = (id) => {
        alert(`Do you really want to Delete Task ${id}`)
    }

    return ( 
        <div className="Task">
            <div className='Task-Heading'>
                <h2>My Tasks</h2>
            </div>
            <div className="Task-Body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Task</th>
                            <th scope="col">Description</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Scheduled</th>
                            <th scope="col">Assign By</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(e =>
                                <tr>
                                    <th scope="row">{e.id}</th>
                                    <td><Link to={detailsURI(e.id)} style={{
                                        color:"#4d4d4d"
                                    }}>{e.task}</Link></td>
                                    <td>{(e.description.length <= 20) ? e.description : e.description.substring(0,20)+'...' }</td>
                                    <td>{e.priority}</td>
                                    <td>{e.scheduledDate}</td>
                                    <td>{e.assignBy}</td>
                                    <td>
                                        <Link type='button' to={editURI(e.id)} class="btn btn-link"><i className="fa-solid fa-pencil fa-fw"></i></Link>
                                        <button onClick={(el) => deleteURI(e.id)} class="btn btn-link"><i className="fa-solid fa-trash fa-fw"></i></button>
                                    </td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Task;