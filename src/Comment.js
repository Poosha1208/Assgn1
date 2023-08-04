import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import "./App.css";

export default function Comment() {
  let param = useParams();
  let userId = param.id;

  const fetchData = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
      .then((res) => res.data);
   /*  console.log(response); */
    return response;
  };
  const { data, isLoading, error } = useQuery("data", fetchData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:{error.message}</div>;

  return (
    <>
      
        <h2>Comments for Post {userId}</h2>
          <div className="post-div">
            {data.map((item) => (
              <>
                <div className="card">
                  <h1 >{item.name}</h1>
                  <p >{item.body}</p>
                  <br />
                  <h3 className="">{item.email}</h3>
                  
                </div>
                
              </>
            ))}
          </div>
        
      
    </>
  );
}