import { useState, useEffect } from "react";
import Post from "../components/post/Post";
import { json } from "react-router-dom";
import  getAllPosts  from "../services/Fetchservices"

export function Reviews() {
  console.log("REVIEW");
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // useEffect(() => {
  //   async function fetchReviews() {
  //     console.log("FETCH");
  //     setLoading(true);
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );

  //     const reviews = await response.json();

   
  //     setReviews(reviews);
  //     setLoading(false);
  //   }

  //   fetchReviews();
  // }, []);

 
  useEffect(() => {
 
 const reviews = getAllPosts();
    reviews.then((res)=>{
    console.log(res.length)

    setTotalCount(res.length)
    setReviews(res)
  })
// console.log(reviews); 

 
//  setReviews(reviews);
    //  const reviews =  fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   // .then((json) => {setReviews(json)})
    //   .then((json) => console.log(json.length))
      

      // const count = reviews.length;

    
      // console.log(count);
      
  
  }, []);
console.log(totalCount);
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
