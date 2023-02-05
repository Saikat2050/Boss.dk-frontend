import { useState } from 'react';

const CreateTask = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");

    const handleSubmit = (e) => {
        const data = { name, description, date, priority };
        console.log(data);
    }

    return (
        <div className="CreateTask">
            <div className='Task-form-heading'>
                <h2>Create Task</h2>
            </div>
            <div className="Task-form-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="taskName" placeholder='Task Name' aria-describedby="taskHelp" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="taskDescription" placeholder='Task Description' rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div id="date-picker-task" className="md-form md-outline input-with-post-icon datepicker" data-mdb-toggle="datetimepicker" inline="false">
                        <input placeholder="schedule Date" type="text" id="task" className="form-control" required value={date} onChange={(e) => setDate(e.target.value)} />
                        <i className="fas fa-calendar input-prefix"></i>
                    </div>
                    <select className="form-select" aria-label="Default select example" required value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option selected disabled>Select Priority</option>
                        <option value="1">High</option>
                        <option value="2">Mid</option>
                        <option value="3">Low</option>
                        <option value="4">Urgent</option>
                    </select>

                    <div className="col-12" id="form-button" style={{
                        margin: "20px",
                        padding: "20px",
                        border: "10px"
                    }}>
                        <button type="submit" className="btn btn-primary">Create Task</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreateTask;