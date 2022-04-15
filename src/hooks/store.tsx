// 로컬 스토리지에 JSON 형태로 token 저장(set) / 불러오기(get) / 삭제(remove) 헬퍼 구현
const storage = {
  set: (key: string, object: any) => {
    if (!localStorage) return;
    localStorage[key] =
      typeof object === "string" ? object : JSON.stringify(object);
  },
  get: (key: string) => {
    if (!localStorage) return null;

    if (!localStorage[key]) {
      return null;
    }

    try {
      const parsed = JSON.parse(localStorage[key]);
      return parsed;
    } catch (e) {
      return localStorage[key];
    }
  },
  remove: (key: string) => {
    if (!localStorage) return null;

    if (localStorage[key]) {
      localStorage.removeItem(key);
    }
  },
};

export default storage;
