import { escapeForUrl } from './utils';

/**
 * Set unique id for each headings (only for h1, h2, h3)
 * @param html
 */
export function setHeadingId(html: string) {
  console.log('hello');

  let div;
  if (typeof window !== 'undefined') {
    div = document?.createElement('div');
    div.innerHTML = html;
  }

  let h1;
  let h2;
  let h3;
  if (typeof window !== 'undefined') {
    h1 = div?.querySelectorAll('h1');
    h2 = div?.querySelectorAll('h2');
    h3 = div?.querySelectorAll('h3');
  }

  const idList: string[] = [];

  const setId = (element: HTMLHeadingElement) => {
    const id = escapeForUrl(element.innerText);
    const exists = idList.filter(existingId => existingId.indexOf(id) !== -1);
    const uniqueId = `${id}${exists.length === 0 ? '' : `-${exists.length}`}`;
    element.id = uniqueId;
    idList.push(uniqueId);
  };

  [h1, h2, h3].forEach(elements => elements?.forEach(setId));

  return div.innerHTML;
}

export function parseHeadings(html: string) {
  const div = document.createElement('div');
  div.innerHTML = html;

  const elements = Array.from(div.children);

  const headings = elements.filter(el => el.tagName.match(/H([1-3])/));

  const headingsInfo = headings.map(heading => ({
    id: heading.textContent,
    title: heading.textContent,
    level: parseInt(heading.tagName.replace('H', ''), 10),
  }));

  const minLevel = Math.min(...Array.from(headingsInfo.map(info => info.level)));

  headingsInfo.forEach(info => {
    info.level -= minLevel;
  });

  return headingsInfo;
}

export function parseHeadings2(html: string) {
  if (typeof window !== 'undefined') {
    const div = document.createElement('div');
    div.innerHTML = html;

    console.log(div);

    const elements = Array.from(div.children);

    const headings = elements?.filter(el => el.tagName.match(/H([1-3])/));

    return headings;
  }
}
