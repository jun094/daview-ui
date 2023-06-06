import { fetchFiles, fetchCreator } from '@/api/github';
import { Suspense } from 'react';

async function LectureLists({ creator }: { creator: string }) {
  const lectures = await fetchCreator(creator);

  console.log(lectures);

  return (
    <li className="border-2 border-sky-500 p-4 mb-3">
      <h3 className="text-2xl">크리에이터 명: {creator}</h3>
    </li>
  );
}

async function Page() {
  // const files = await fetchFiles();
  const res = await fetchCreator('김영한');
  console.log('res==>', res);

  // const creatorDatas = [];

  // for (const { name: file } of files) {
  //   const res = await fetchCreator(file);
  // }

  /**
   * 1. Fetch API 받아온 것에서 다시 개별적으로 api 요청
   * 2. 응답값에서 name: image인 거 필터링
   * 3. 응답값에서 path 받아서 다시 api 요청
   * 4. download_url 로 md 파일 받아옴
   * 5. frontmatter랑 markdown 분리
   */
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-5xl">home page</h1>

      {/* <ul>
        {files.map(({ path, name: creator }: any) => (
          <Suspense key={path} fallback={<h1>loading...</h1>}>
            <h1>{creator}</h1>
          </Suspense>
        ))}
      </ul> */}
    </main>
  );
}

export default Page;
