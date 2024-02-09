
export function Post(review) {
      console.log('POST')
      console.log(review)


    return (

<div>
  <div className="post-id">{review.id}</div>
  <div className="post-title">{review.title}</div>
  <div className="post-body">{review.body}</div>
</div>


    )
}