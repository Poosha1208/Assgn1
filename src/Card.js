import { Link } from "react-router-dom";
import "./App.css";
import TruncatedText from "./TruncatedText";

export default function Card(props) {
  return (
    <>
      <div className="card">

        <h1 >{`${props.id}. ${props.title}`}</h1>
        <TruncatedText text={props.body}/>
        <div className="card-Button">
          <Link to={`/comment/${props.id}`} >
            View Comments...
          </Link>
        </div>

      
      </div>
    </>
  );
}
/*<TruncatedText text={props.body}/>*/