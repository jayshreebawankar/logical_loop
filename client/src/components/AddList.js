import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../service/api";
const AddList = () => {
  const navigation = useNavigate();
  const initialval = { subject: "", description: "", author: "" };
  const [users, setUser] = useState(initialval);
  const { subject, description, author } = users;
  const userInputHandl = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users, "Userdatasss");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await createUser(users);
    navigation("/");
  };
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Subject</label>
          <input
            value={subject}
            onChange={userInputHandl}
            name="subject"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <input
            value={description}
            onChange={userInputHandl}
            name="description"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Author</label>
          <input
            value={author}
            onChange={userInputHandl}
            name="author"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="author"
          />
        </div>

        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddList;
