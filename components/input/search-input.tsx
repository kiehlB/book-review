import { IoSearchOutline } from 'react-icons/io5';

interface SearchInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput = ({ input, setInput, handleSubmit }: SearchInputProps) => (
  <form onSubmit={e => handleSubmit(e)} className="col-span-6 mxl:col-span-5 mmd:hidden">
    <div className="relative">
      <div className="bg-[rgb(255 115 179)] dark:text-darkText-100 absolute left-[16px] top-[50%] translate-y-[-50%]">
        <IoSearchOutline />
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        className="custom-input h-[42px] w-full rounded-l-2xl rounded-r-2xl bg-[#F5F7FA] px-[2.5rem] py-[0.5rem] text-sm focus:outline-none dark:border-[#1a1b1e] dark:bg-dark-400 dark:text-[#e4e5e7]"
      />
    </div>
  </form>
);

export default SearchInput;
