import React from "react"
import "../layout/BlogSection.css";
import "../mobile/BlogSection.css";
import articles from "../global/Articles";

const BlogArticle = ({ title, content, link, image }) =>(
  <div className="blog-article">
    <div className="blog-article-img" style={{backgroundImage: `url(${image})`}}></div>
    <div className="blog-article-details">
      <h5>{title}</h5>
      <p>
        {content}
      </p>
      <button>Voir Plus</button>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="blog">
      <h4>Notre Blog</h4>
      <div className="blog-container">
        {
          articles.map(article =><BlogArticle title={article.title} content={article.content} link={article.link} image={article.image} />)
        }
      </div>
    </div>
  )
}

export default Blog
