// import React, { useState, useEffect } from 'react';
// import './CSS/todo.css';
// import Todocards from './Todocards';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Update from './Update';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// let toUpdateArray = [] ;
// let idd = sessionStorage.getItem("id");
// const Todo = () => {
//   const [inputs, setInputs] = useState({ title: "", body: "" });
//   const [array, setArray] = useState([]);
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);

//   const change = (e) => {
//     const { name, value } = e.target;
//     setInputs({ ...inputs, [name]: value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     if (idd && inputs.title && inputs.body) {
//       try {
//         const response = await axios.post("http://localhost:1000/list/addTask", { title: inputs.title, body: inputs.body, id: idd });
//         console.log(response);
//         setArray([...array, response.data]);
//         setInputs({ title: "", body: "" });
//         toast.success("Your task is added");
//       } catch (error) {
//         console.error('Error adding task:', error);
//         toast.error("Failed to add task");
//       }
//     } else if (!isLoggedIn) {
//       toast.error("Please login to save data");
//     } else {
//       toast.error("Please fill in all fields");
//     }
//   };

//   const del = async (cardId) => {
//     console.log(cardId);
//     try {
//       const response = await axios.delete(`http://localhost:1000/list/deleteTask/${cardId}`, {
//          data : {id : idd}
//       });
//       console.log('Delete successful:', response.data);
//       setArray(array.filter(item => item._id !== cardId));
//       toast.success("Task deleted successfully");
//     } catch (error) {
//       console.error('There was an error deleting the item:', error);
//       toast.error("Failed to delete task");
//     }
//   };

//   const dis = (value) => {
//     console.log(value);
//     document.getElementById('todo-update1').style.display = value;
//   }

//   const update = (value) => {
//     console.log(value);
//     toUpdateArray  = array[value];
//     console.log(toUpdateArray);
//   }

//   useEffect(() => {
//     if(idd){
//       const fetchTasks = async () => {
//          try {
//            const response = await axios.get(`http://localhost:1000/list/tasks/${idd}`);
//            setArray(response.data.list);
//          } catch (error) {
//            console.error('Error fetching tasks:', error);
//          }
//        };
//        fetchTasks();
//     }
//   }, [submit , del]);

//   return (
//     <div className='outerdiv'>
//       <ToastContainer />
//       <div className='container form-container my-5'>
//         <section className="get-in-touch">
//           <h1 className="title">Get in touch</h1>
//           <form className="contact-form row">
//             <div className="form-field col-lg-11">
//               <input id="title" className="input-text js-input" type="text" onChange={change} name='title' value={inputs.title} />
//               <label className="label" htmlFor="title">Title</label>
//             </div>
//             <div className="form-field col-lg-11">
//               <input id="body" className="input-text js-input" type="text" onChange={change} name='body' value={inputs.body} />
//               <label className="label" htmlFor="body">Message</label>
//             </div>
//             <div className="form-field col-lg-12" onClick={submit}>
//               <button className="submit-btn" type="submit">
//                 Add
//               </button>
//             </div>
//           </form>
//         </section>
//       </div>
//       <div className='todo-body container'>
//         <div className="container-fluid">
//           <div className="row">
//             {array && array.map((item, index) => (
//               <div className="col-lg-3 mx-5 my-2" key={index}>
//                 <Todocards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} tobeUpdate={update}/>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className='todo-update1'  id='todo-update1'>
//         <Update display={dis} title={toUpdateArray.title} body={toUpdateArray.body} id={toUpdateArray._id}/>
//       </div>
//     </div>
//   );
// };

// export default Todo;

import React, { useState, useEffect } from 'react';
import './CSS/todo.css';
import Todocards from './ThoughCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ThoughCard from './ThoughCard';

let toUpdateArray = [];

const Thought = () => {
  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [array, setArray] = useState([]);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const idd = sessionStorage.getItem("id");

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (idd && inputs.title && inputs.body) {
      try {
        const response = await axios.post(`${window.location.origin}/list/addTask`, { title: inputs.title, body: inputs.body, id: idd });
        console.log(response);
        setArray([...array, response.data]);
        setInputs({ title: "", body: "" });
        toast.success("Your task is added");
        fetchTasks(); // Optional: Fetch tasks again after adding a new one
      } catch (error) {
        console.error('Error adding task:', error);
        toast.error("Failed to add task");
      }
    } else if (!isLoggedIn) {
      toast.error("Please login to save data");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const del = async (cardId) => {
    console.log(cardId);
    try {
      const response = await axios.delete(`${window.location.origin}/list/deleteTask/${cardId}`, { data: { id: idd } });
      console.log('Delete successful:', response.data);
      setArray(array.filter(item => item._id !== cardId));
      toast.success("Task deleted successfully");
    } catch (error) {
      console.error('There was an error deleting the item:', error);
      toast.error("Failed to delete task");
    }
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById('todo-update1').style.display = value;
  };

  const update = (value) => {
    console.log(value);
    toUpdateArray = array[value];
    console.log(toUpdateArray);
  };

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/list/tasks/${idd}`);
      setArray(response.data.list);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    if (idd) {
      fetchTasks();
    }
  }, [idd]); // Fetch tasks whenever `idd` changes

  return (
    <div className='outerdiv'>
      <ToastContainer />
      <div className='container form-container my-5'>
        <section className="get-in-touch">
          <h1 className="title">Get in touch</h1>
          <form className="contact-form row" onSubmit={submit}>
            <div className="form-field col-lg-11">
              <input id="title" className="input-text js-input" type="text" onChange={change} name='title' value={inputs.title} />
              <label className="label" htmlFor="title">Title</label>
            </div>
            <div className="form-field col-lg-11">
              <input id="body" className="input-text js-input" type="text" onChange={change} name='body' value={inputs.body} />
              <label className="label" htmlFor="body">Message</label>
            </div>
            <div className="form-field col-lg-12">
              <button className="submit-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className='todo-body container'>
        <div className="container-fluid">
          <div className="row">
            {array && array.map((item, index) => (
              <div className="col-lg-3 mx-5 my-2" key={index}>
                <ThoughCard title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} tobeUpdate={update} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='todo-update1' id='todo-update1'>
        <Update display={dis} title={toUpdateArray.title} body={toUpdateArray.body} id={toUpdateArray._id} />
      </div>
    </div>
  );
};

export default Thought;
