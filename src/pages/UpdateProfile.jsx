import React, { useEffect, useState } from 'react'
import styles from "./update.module.css"
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    let userID=localStorage.getItem("userID")

    let navigate=useNavigate()

    let[userDetails,setUserDetails]=useState(null)

    useEffect(()=>{
        async function fetchUser() {
           let {data}= await axios.get(`http://localhost:5000/users/${userID}`)
           console.log(data);
           setUserDetails(data);
        }
        fetchUser()
    },[])

    let handleChange=(e)=>{
        let {name,value}=e.target
        setUserDetails({...userDetails,[name]:value})
    }

    let updatedFormSubmit=(e)=>{
        e.preventDefault();
        console.log("updated value",userDetails);
        axios.put(`http://localhost:5000/users/${userID}`,userDetails)
        .then(()=>{
            toast.success("Profile Updated")
            navigate("/profile")
        }).catch(()=>{
            toast.error("Update Failed")
        })
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Update</h1>
      <form className={styles.form} onSubmit={updatedFormSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails?.name}
          className={styles.input}
          readOnly
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails?.email}
          className={styles.input}
          readOnly
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails?.password}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={userDetails?.phone}
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

export default UpdateProfile
