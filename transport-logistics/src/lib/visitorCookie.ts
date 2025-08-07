import Cookies from 'js-cookie';

export type VisitorType = 'personal' | 'small-business' | 'commercial';

const VALID_TYPES: VisitorType[] = ['personal', 'small-business', 'commercial'];
const COOKIE_KEY = 'visitorType';

export const getVisitorType = (): VisitorType => {
  const cookie = Cookies.get(COOKIE_KEY);
  if (VALID_TYPES.includes(cookie as VisitorType)) {
    return cookie as VisitorType;
  }
  return 'personal'; // fallback
};

export const setVisitorType = (type: VisitorType): void => {
  Cookies.set(COOKIE_KEY, type);
};

export const removeVisitorType = (): void => {
  Cookies.remove(COOKIE_KEY);
};