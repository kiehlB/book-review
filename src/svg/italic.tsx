export type ItalicProps = {
  className?: string;
};

function Italic({ className }: ItalicProps) {
  return (
    <svg
      className="crayons-icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15v2Z"></path>
    </svg>
  );
}

export default Italic;
