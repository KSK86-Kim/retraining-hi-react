import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArticlesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <div>noticeboard</div>
      <div>page</div>

      {posts.map(post => (
        <Link key={post.id} to={`/articles/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  );
};

export default ArticlesPage;
