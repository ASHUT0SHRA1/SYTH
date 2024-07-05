import React from 'react';
import './CSS/todocard.css';
import { AiFillDelete } from 'react-icons/ai';
import { MdModeEdit } from "react-icons/md";

const ThoughCard = ({ title, body, id, delid, display ,updateId , tobeUpdate}) => {
  return (
    <div className="card my-3 todo-card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{body}</p>
        <div className='d-flex justify-content-around'>
          <div className='action' onClick={() => {display("block"); tobeUpdate(updateId)}} >
            <MdModeEdit className='card-icon card-icon-update todo-update' /> Update
          </div>
          <div className='action' onClick={() => delid(id)}>
            <AiFillDelete className='card-icon card-icon-delete' /> Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThoughCard;
