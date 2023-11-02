'use client';
import { BackLink } from '@/components/arrow-button';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1 className="text-[1.5rem] mt-2 text-[#222222] font-Pretendard">
        오류가 발생했습니다!
      </h1>

      <BackLink href="/" className="text-[1rem] text-[#222222] font-Pretendard mt-8">
        <span>돌아가기</span>
      </BackLink>
    </div>
  );
}
