import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ArticlePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);
  return (
    <>
      <div>ArticlePage</div>
      <div>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </>
  );
};

export default ArticlePage;
