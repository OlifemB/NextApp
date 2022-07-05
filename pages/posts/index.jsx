import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Heading from "../../components/Heading";
import img from "../../public/images/BG1.jpg";

export const getStaticProps = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await responce.json();

  if (!data) return { notFound: true };

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <main>
      <Head>
        <title>Posts</title>
      </Head>

      <div className="container">
        <Heading tag-="h1">Posts</Heading>

        {posts && posts.map(({ userId, id, title, body }, index) => (
            <div className="post" key={`post=${index}`}>
              <Link href={`/posts/${id}`}>
                <h4>{title}</h4>
              </Link>
              <p>{body}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Posts;
