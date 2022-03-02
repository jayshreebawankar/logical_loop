import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllusers } from "../service/api";
import { editUser } from "../service/api";

const EditList = () => {
  const { id } = useParams();

  const navigation = useNavigate();
  const initialval = { subject: "", description: "", author: "" };
  const [users, setUser] = useState(initialval);
  const { subject, description, author } = users;
  useEffect(() => {
    editFun();
  }, []);
  const editFun = async () => {
    const result = await getAllusers(id);
    setUser(result.data);
  };

  const userInputHandl = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
    console.log(users, "usersss");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await editUser(id, users);
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
            placeholder="sub"
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

export default EditList;
