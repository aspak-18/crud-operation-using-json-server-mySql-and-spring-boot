import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./update.module.css"
import toast from 'react-hot-toast'

const AdminUpdate = () => {

    let navigate=useNavigate();

    let[updateUser,setUpdateUser]=useState(null)

    //! fetching dynamic id from url
    let {id}=useParams();
    console.log(id)
    
    useEffect(()=>{
        async function fetchUpdateUser() {
            let {data }= await axios.get(`http://localhost:5000/users/${id}`)
            console.log(data)
            setUpdateUser(data) //!storing into state
        }
        fetchUpdateUser()
    },[])

    let handleChange=(e)=>{
        let{name,value}=e.target
        setUpdateUser({...updateUser,[name]:value})
    }

    let formSubmit=(e)=>{
        e.preventDefault();
        console.log(updateUser)
        axios.put(`http://localhost:5000/users/${id}`,updateUser).then(()=>{
            toast.success("user updated")
            navigate("/admin")
        }).catch(()=>{
            toast.error("not updated")
        })
    }
        
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Update</h1>
    <form className={styles.form} onSubmit={formSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={updateUser?.name}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={updateUser?.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={updateUser?.password}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={updateUser?.phone}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>
          Update
      </button>
    </form>
  </div>
  )
}

export default AdminUpdate
