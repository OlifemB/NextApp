import Head from "next/head";
//import styles from '../../styles/Post.module.scss'
import PostInfo from "../../components/PostInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await responce.json();
  if (!data) return { notFound: true };
  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <main>
      <Head>
        <title>Post</title>
      </Head>

      <div className="container">
        <PostInfo post={post} />
      </div>
    </main>
  );
};

export default Post;
