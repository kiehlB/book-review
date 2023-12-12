'use client';

import { BackLink } from '@/components/arrow-button';

export default function GlobalError({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div>
          <h1 className="mt-2 font-Pretendard text-[1.5rem] text-[#222222]">
            오류가 발생했습니다!
          </h1>

          <BackLink href="/" className="mt-8 font-Pretendard text-[1rem] text-[#222222]">
            <span>돌아가기</span>
          </BackLink>
        </div>
      </body>
    </html>
  );
}
