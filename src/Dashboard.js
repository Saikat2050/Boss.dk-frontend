import data from './data.json'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className='Dashboard-Heading'>
                <h2>Dashboard</h2>
            </div>
            <div className="Dashboard-Body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Task</th>
                            <th scope="col">Description</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Assign By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(e =>
                                <tr>
                                    <th scope="row">{e.id}</th>
                                    <td>{e.task}</td>
                                    <td>{(e.description.length <= 20) ? e.description : e.description.substring(0,20)+'...' }</td>
                                    <td>{e.priority}</td>
                                    <td>{e.assignBy}</td>
                                </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Dashboard;