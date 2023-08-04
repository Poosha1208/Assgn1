import { Routes, Route } from "react-router-dom";
import Comment from "./Comment";
import Post from "./Post";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="post" element={<Post />} />
        <Route path="/comment/:id" element={<Comment></Comment>} />
      </Routes>
    </>
  );
}

export default App;