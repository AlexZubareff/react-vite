import { useState, useEffect } from "react";
import Post  from "../components/post/Post";
// import classes from "./Reviews.module.css";
import { useParams } from "react-router-dom";

export function Review() {
  console.log("REVIEW");
  const {id} = useParams();
  const[loading, setLoading] = useState(false);
  const [review, setReview] = useState([]);

  useEffect(()=> {
    async function fetchReview() {
        console.log("FETCH");
        setLoading(true)
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )
          
        const review = await response.json();
    
        setReview(review);
        setLoading(false);
      }
    

    fetchReview()
  }, [id])

  


  return (
    <div className="wrap">
      <h1>Reviewspage</h1>
      {/* <button className={classes["get-post-btn"]} onClick={fetchReviews}>
        получить посты
      </button> */}

      
    {loading && <p>Loading ... </p>}
    {!loading && 
       <Post review={review} key={review.id} />
    }
   
    </div>
  );
}
