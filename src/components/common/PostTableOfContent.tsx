import { useEffect, useState } from 'react';
import { useHeadingsData } from '../../hooks/useHeadingsData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Headings = ({ headings, activeId }) => {
  return (
    <ul className="border-l">
      {headings.map(heading => (
        <li
          key={heading.id}
          className={heading.id === activeId ? 'active' : ''}
          style={{ marginLeft: heading.level * 12 }}>
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
        </li>
      ))}
    </ul>
  );
};

const PostTableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav
      aria-label="Table of contents"
      className="flex flex-col text-[#868E96] max-h-[calc(100vh-128px)] overflow-y-hidden overflow-x-hidden">
      <Headings headings={nestedHeadings} activeId={activeId} />
    </nav>
  );
};

export default PostTableOfContents;
