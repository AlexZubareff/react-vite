import { useState } from "react"
// import  {Post} from "../components/post/Post";




export function Reviewspage() {
    console.log('REVIEW')
    const [reviews, setReviews] = useState([]);

// useEffect(()=> {
//     fetchReviews()
// }, [])

    async function fetchReviews() {
    console.log('FETCH')


        const reviews = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        // .then(json => console.log(json))
        console.log(reviews)
        setReviews(reviews)

    }


    // console.log('Review: ', reviews);





    return (

        <div className="wrap">
            <h1>Reviewspage</h1>
            <button className="get-post-btn" onClick={fetchReviews}>полусить посты</button>
            {/* {reviews.map((item) =><Post review={item} key={item.id} />)} */}

            {reviews.map((item) =>
            <div key={item.id}>
            <div className="post-id">{item.id}</div>
            <div className="post-title">{item.title}</div>
            <div className="post-body">{item.body}</div>
          </div>

            )}

        </div>

    )
}

   {/* // console.log(body, id, title, i) */}

                {/* <div className="post-id">{id}</div>
                <div className="post-title">{title}</div>
                <div className="post-body">{body}</div> */}