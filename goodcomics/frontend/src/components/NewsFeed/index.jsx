import { useState, useEffect } from "react";
import Parser from "rss-parser";

export default function NewsFeed() {
  const [feedItems, setFeedItems] = useState([]);
  // const [loading, isLoading] = useState(true)

  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
        const parser = new Parser();
        const feed = await parser.parseURL(CORS_PROXY +
          "https://1comicbooksblog.blogspot.com/feeds/posts/default?alt=rss"
        );
        setFeedItems(feed.items);
      } catch (error) {
        console.error("Error fetching RSS feed: ", error);
      }
    };
    fetchRssFeed();
  }, []);

  return (
    <div>
      {feedItems.map((item, index) => (
        <div key={index}>
          <p>Title: {item.title}</p>
          <p>{item.contentSnippet}</p>
        </div>
      ))}
    </div>
  );
}
