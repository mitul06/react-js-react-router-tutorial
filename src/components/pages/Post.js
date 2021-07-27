import { useParams } from "react-router-dom"

const Post = (props) => {
  let {category} = useParams();
    return (
        <>
          <h1>Post Page category - {category} </h1>  
          <h1>Post Page wirh id - {props.match.params.id} </h1>  
        </>
    )
}

export default Post
