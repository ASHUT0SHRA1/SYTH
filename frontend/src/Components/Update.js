import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { authActions } from '../Store';
let idd = sessionStorage.getItem("id");
const Update = ({ display, title, body, id }) => {
    const [inputs, setInputs] = useState({
        title: '',
        body: '', 
    });

    useEffect(() => {
        setInputs({
            title: title,
            body: body, 
        });
    }, [title, body]);

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const updateBtn = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${window.location.origin}/list/updateTask/${id}` , { title: inputs.title, body: inputs.body, id: idd });
            display("none");
            toast.success("Task Updated Successfully");
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="container p-5 bg-primary text-white d-flex flex-column justify-content-center align-items-center">
            <h3>Update Your Task</h3>
            <ToastContainer/>
            <div className="form-group w-75 my-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="todo-inputs my-4 w-100 p-3"
                    name='title'
                    value={inputs.title}
                    onChange={change}
                />
            </div>
            <div className="form-group w-75 my-3">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea
                    className="todo-inputs my-4 w-100 p-3"
                    name='body'
                    value={inputs.body}
                    onChange={change}
                ></textarea>
            </div>
            <div className="d-flex justify-content-between w-75">
                <button
                    className="btn btn-success me-2"
                    onClick={updateBtn}
                >Update</button>
                <button id='cls' className="btn btn-secondary" onClick={() => {
                    display("none");
                }}>Cancel</button>
            </div>
        </div>
    );
};

export default Update;
