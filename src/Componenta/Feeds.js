import React from "react";
import { useEffect, useState } from "react";
import { Usecontext1 } from "../UserContext/Usercontext1";
import { useContext } from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import "./Feeds.css";
export default function Feeds() {
  const {  setData, count, setCount } = useContext(Usecontext1);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [data1] = useFetch(url);
  console.log(data1.length)
  return (
    <div className="feeds-container">
      {data1 &&
        data1.map((elem, index) => (
          <div key={elem.id}>
            <div>UserId: {elem.userId}</div>
            <div>Title: {elem.title}</div>
            <div>Body: {elem.body}</div>
            <div onClick={() => setCount(elem.id)}>
              <Link to="/Comments">
                <button>Go to Comments</button>
              </Link>
            </div>
            <br></br>
          </div>
        ))}
    </div>
  );
}
