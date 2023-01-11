import { Fira_Mono } from '@next/font/google';
import localFont from '@next/font/local';
import { PageGrid } from '../layout/GridLayout';

const myFont = localFont({ src: '../../font/Regular.otf' });

const roboto = Fira_Mono({
  weight: '400',
});

function Header() {
  return (
    <PageGrid className={`${roboto.className} h-[4.5rem] items-center`}>
      <div className={`${myFont.className} col-span-2`}>Books</div>
      <div className="col-span-5">input</div>
      <div className="col-span-1">write</div>
      <div className="flex col-span-2">
        <div>Dark</div>
        <div>user</div>
      </div>
    </PageGrid>
  );
}

export default Header;
