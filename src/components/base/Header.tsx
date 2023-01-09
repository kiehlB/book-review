import { Fira_Mono } from '@next/font/google';
import localFont from '@next/font/local';

const myFont = localFont({ src: '../../font/Regular.otf' });

const roboto = Fira_Mono({
  weight: '400',
});

function Header() {
  return (
    <div
      className={`${roboto.className} flex h-[4.5rem] border items-center px-[10.75rem]`}>
      <div className={`grid grid-cols-12 border-2 w-full`}>
        <div className={`${myFont.className} col-span-2`}>Books</div>
        <div className="col-span-7">input</div>
        <div className="col-span-1">write</div>
        <div className="flex col-span-2">
          <div>Dark</div>
          <div>user</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
