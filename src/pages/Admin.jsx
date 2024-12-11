import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Admin = () => {
  let [allUser, setAllUser] = useState(null);
  let [toogle, setToggle] = useState(false);

  useEffect(() => {
    async function fetchAllRegisteredUser() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      setAllUser(data);
    }
    fetchAllRegisteredUser();
  }, [toogle]);

  let deleteUser = (x) => {
    console.log("Deleted", x);
    axios
      .delete(`http://localhost:5000/users/${x}`)
      .then(() => {
        toast.success("User Deleted");
        setToggle(!toogle);
      })
      .catch(() => {
        toast.error("unable to delete");
      });
  };

  return (
    <div>
      <h1>Admin panel</h1>
      <article>
        {allUser?.map(({ id, name, email, password, phone }) => {
          if (email !== "admin@gmail.com") {
            return (
              <section key={id}>
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
                <h1>{phone}</h1>
                <button><Link to={`/adminupdate/${id}`}>Update</Link></button>
                <button onClick={() => deleteUser(id)}>Delete</button>
                <br />
                <br />
              </section>
            );
          }
        })}
      </article>
    </div>
  );
};

export default Admin;
