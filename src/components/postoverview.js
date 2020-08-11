import React from 'react';
import '../css/overview.styl';
import { Link } from 'gatsby';

const PostOverview = ({ post }) => {
  const {
    frontmatter: { title, description, date, slug },
    timeToRead,
  } = post;
  return (
    <div className="overview">
      <div className="title">
        <Link
          className="highlight-text"
          to={slug}
          style={{ color: 'var(--primary-color)' }}
        >
          {title}
        </Link>
      </div>
      <div className="date" style={{ color: 'var(--secondary-color)' }}>
        {date}
        <span>
          {', '}
          {timeToRead} min read
        </span>
      </div>
      <div className="description" style={{ color: 'var(--secondary-color)' }}>
        {description}
      </div>
    </div>
  );
};

export default PostOverview;
