import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllusers, deleteUser } from "../service/api";
export const TodoList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    allUser();
  }, []);
  const allUser = async () => {
    const result = await getAllusers();
    setUser(result.data);
    console.log("todolist data", result.data);
  };
  const deleteData = async (id) => {
    await deleteUser(id);
    getAllusers();
  };
  return (
    <div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Subject</th>
            <th scope="col">Description</th>
            <th scope="col">Author</th>

            <th></th>
          </tr>
        </thead>

        {user.map((data, index) => {
          return (
            <tbody>
              <tr>
                <th style={{}}>{index}</th>
                <td>{data.subject}</td>
                <td>{data.description}</td>
                <td>{data.author}</td>
                <td>
                  <Link to={`/edit/${data._id}`}>
                    <button type="button" class="btn btn-primary">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteData(data._id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
