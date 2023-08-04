import {  useQuery } from "react-query";
import { React } from "react";
import Card from "./Card";
import axios from "axios";
import "./App.css";

const fetchData = async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  /* console.log(response); */
  return response;
};

export default function Home() {
  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;
  return (
    <>
      <h2>POSTS</h2>
        <div className="post-div">
          {data.map((item) => (
            <>
              
              <Card title={item.title} id={item.id} body={item.body}></Card>
            </>
          ))}
        </div>
      
    </>
  );
}