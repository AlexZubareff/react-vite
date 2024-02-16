

//Сервис получения всех постов с сервера
export default async function getAllPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await response.json();
  // console.log(result);
  return result;
}


//Сервис получения одного поста с сервера

// export async function getPost() {
//   console.log("getPost: ", item);

//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${item}`
//   );

//   const result = await response.json();
//   console.log(result);
//   return result;
// }
