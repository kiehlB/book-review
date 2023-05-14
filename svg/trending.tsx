import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';

function Trending({ className }: any) {
  const { isdark } = useSelector((state: RootState) => state.core);

  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill={isdark == 'dark' ? '#e4e5e7' : '#334155'}
        width={24}
        height={24}
        d="M20 15a1 1 0 002 0V7a1 1 0 00-1-1h-8a1 1 0 000 2h5.59L13 13.59l-3.3-3.3a1 1 0 00-1.4 0l-6 6a1 1 0 001.4 1.42L9 12.4l3.3 3.3a1 1 0 001.4 0L20 9.4V15z"></path>
    </svg>
  );
}

export default Trending;
