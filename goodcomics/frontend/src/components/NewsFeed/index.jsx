import { useState, useEffect } from "react";
// import Parser from "rss-parser";

export default function NewsFeed() {
  const [feedItems, setFeedItems] = useState([]);
  // const [loading, isLoading] = useState(true)

  useEffect(() => {
    fetch("/api/rss-feed")
      .then((response) => response.json())
      //  .then(data => console.log("rss feed", data))
      .then((items) => setFeedItems(items))
      .catch((error) => console.error(error));

    console.log("feed items state", feedItems);
  }, []);

  return (
    <div
      className="App-header"
      style={{ borderRadius: 0, paddingLeft: "300px", width: "250px" }}
    >
      News Feed
      {feedItems?.map((item, index) => (
        <div key={index}>
          <p>Title: {item.title}</p>
          <p>{item.contentSnippet}</p>
        </div>
      ))}
    </div>
  );
}
