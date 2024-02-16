import classes from "./Post.module.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Post({ review }) {
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);

  if (!id) {
    return (
      <div
        className={classes["post-item"]}
        onClick={() => navigate(`./${review.id}`)}
      >
        <div className="post-id">{review.id}</div>
        <div className={classes["post-title"]}>{review.title}</div>
      </div>
    );
  } else {
    return (
      <>
        <button
          className={classes["get-post-btn"]}
          onClick={() => navigate(`/review`)}
        >
          назад
        </button>
        <div className={classes["post-item"]}>
          <div className="post-id">{review.id}</div>
          <div className={classes["post-title"]}>{review.title}</div>
          <div className={classes["post-body"]}>{review.body}</div>
        </div>
      </>
    );
  }
}
