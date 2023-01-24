import { useEffect, useState } from 'react';
import { useHeadingsData } from '../../hooks/useHeadingsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map(heading => (
      <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
        <a
          href={`#${heading.id}`}
          onClick={e => {
            e.preventDefault();
            document.querySelector(`#${heading.id}`).scrollIntoView({
              behavior: 'smooth',
            });
          }}>
          {heading.title}
        </a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map(child => (
              <li key={child.id} className={child.id === activeId ? 'active' : ''}>
                <a
                  href={`#${child.id}`}
                  onClick={e => {
                    e.preventDefault();
                    document.querySelector(`#${child.id}`).scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}>
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const PostTableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  console.log(nestedHeadings);

  return (
    <nav aria-label="Table of contents">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

export default PostTableOfContents;
