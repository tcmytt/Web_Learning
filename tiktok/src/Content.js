import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [gotop, setGotop] = useState(false);

  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setGotop(true);
      } else {
        setGotop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      {posts.map((post) => (
        <li key={post.id}>{post.title || post.name}</li>
      ))}

      {gotop && (
        <button
          style={{
            right: 0,
            bottom: 0,
            position: "fixed",
            borderRadius: "99px",
            width: "100px",
            height: "50px",
            background: "#333",
            color: "#fff",
            textAlign: "center",
            cursor: "pointer",
            border: "none"
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          Gotop
        </button>
      )}
    </div>
  );
}

export default Content;
