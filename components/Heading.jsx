const Heading = ({ tag, text, children }) => {
  const Tag = tag || "h1";
  return <Tag>{text || children}</Tag>;
};

export default Heading;
