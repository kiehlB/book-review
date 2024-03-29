import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';
import koLocale from 'date-fns/locale/ko';

export const getScrollTop = (): number => {
  if (typeof window !== 'undefined') {
    if (!document.body) return 0;
    const scrollTop = document.documentElement?.scrollTop || document.body.scrollTop;

    return scrollTop;
  }

  return 0;
};

export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  if (scrollTop !== undefined) {
    return scrollHeight - innerHeight - scrollTop;
  } else {
    return 0;
  }
};

export function capitalizeFirstLetter(string: string) {
  return string?.charAt(0).toUpperCase() + string?.slice(1);
}

export const escapeForUrl = (text: string): string => {
  return text
    .replace(
      /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g,
      '',
    )
    .trim()
    .replace(/ /g, '-')
    .replace(/--+/g, '-');
};

export function IsTextNull(text: string) {
  if (!text) return true;
  const replaced = text
    .trim()
    .replace(
      /([\u3164\u115F\u1160\uFFA0\u200B\u0001-\u0008\u000B-\u000C\u000E-\u001F]+)/g,
      '',
    )
    .replace(/&nbsp;/, '');
  if (replaced === '') return true;
  return false;
}

export function checkEmpty(text: string) {
  if (!text) return true;
  const replaced = text
    .trim()
    .replace(
      /([\u3164\u115F\u1160\uFFA0\u200B\u0001-\u0008\u000B-\u000C\u000E-\u001F]+)/g,
      '',
    )
    .replace(/&nbsp;/, '');
  if (replaced === '') return true;
  return false;
}

export const validate = {
  username: (text: string) => /^[a-z0-9]{5,20}$/.test(text),
  password: (text: string) => {
    const passwordRules = [/[a-zA-Z]/, /[0-9]/, /[^A-Za-z0-9]/];
    if (text.length < 8) return false;
    const counter = passwordRules.reduce((acc, current) => {
      if (current.test(text)) {
        acc += 1;
      }
      return acc;
    }, 0);
    return counter > 1;
  },
  link: (text: string) => /^(http|https):\/\/[^ "]+$/.test(text),
};

export const formatDate = (date: string): string => {
  const d = new Date(date);
  const now = Date.now();
  const diff = now - new Date(date).getTime();
  // less than 5 minutes
  if (diff < 1000 * 60 * 5) {
    return '방금 전';
  }
  if (diff < 1000 * 60 * 60 * 24) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  if (diff < 1000 * 60 * 60 * 36) {
    return '어제';
  }
  if (diff < 1000 * 60 * 60 * 24 * 7) {
    return distanceInWordsToNow(d, { addSuffix: true, locale: koLocale });
  }
  return format(d, 'yyyy년 M월 d일');
};
