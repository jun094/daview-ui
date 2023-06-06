import { API_URL, CONTENTS_PATH, REVALIDATE_GITHUB_DATA } from '@/constants';

export type Creator = any;

export const fetchFiles = async () => {
  const res = await fetch(`${API_URL}${CONTENTS_PATH}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });
  const data: any = await res.json();
  return data;
};

export const fetchCreator = async (creator: string) => {
  const res = await fetch(`${API_URL}${CONTENTS_PATH}/creators/${creator}`, {
    next: { revalidate: REVALIDATE_GITHUB_DATA },
  });

  const data: any = await res.json();

  return data;
};

export const fetchLecture = async (creator: string, slug: string) => {
  const res = await fetch(
    `${API_URL}${CONTENTS_PATH}/creators/${creator}/${slug}/README.md`,
    {
      next: { revalidate: REVALIDATE_GITHUB_DATA },
    }
  );
};
