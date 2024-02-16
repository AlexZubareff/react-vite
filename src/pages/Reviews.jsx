import { useState, useEffect } from "react";
import Post from "../components/post/Post";
import  getAllPosts  from "../services/Fetchservices"

export function Reviews() {
  // console.log("REVIEW");
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

 
  useEffect(() => {
 
 const reviews = getAllPosts();
    reviews.then((res)=>{
    // console.log(res.length)

    setTotalCount(res.length)
    setReviews(res)
  })
      
  
  }, []);
// console.log(totalCount);
  
return (
    <div className="wrap">
      <h1>Reviewspage</h1>
      {/* <button className={classes["get-post-btn"]} onClick={fetchReviews}>
        получить посты
      </button> */}

      {loading && <p>Loading ... </p>}
      {!loading &&
        reviews.map((review) => <Post review={review} key={review.id} />)}
    </div>
  );
}
