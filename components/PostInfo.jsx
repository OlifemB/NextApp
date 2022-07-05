const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) return "Empty post";

  return (
    <div className={`post`}>
      <div className={`title`}>{title}</div>
      <div className={`body`}>{body}</div>
    </div>
  );
};

export default PostInfo;
