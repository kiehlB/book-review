export type FoldProps = {
  className?: string;
};

function Fold({ className }: FoldProps) {
  return (
    <svg className="css-hvybmk" fill="none" viewBox="0 0 18 18">
      <path
        stroke="blue"
        width={24}
        height={24}
        d="M5.25 8.167H3.583M5.25 11.5H3.583M5.25 4.833H3.583M7.333 1.5v15m-2.5 0h8.334c1.166 0 1.75 0 2.196-.227.392-.2.71-.518.91-.91.227-.446.227-1.03.227-2.196V4.833c0-1.166 0-1.75-.227-2.195-.2-.392-.518-.711-.91-.91-.446-.228-1.03-.228-2.196-.228H4.833c-1.166 0-1.75 0-2.195.227-.392.2-.711.519-.91.91-.228.446-.228 1.03-.228 2.196v8.334c0 1.166 0 1.75.227 2.196.2.392.519.71.91.91.446.227 1.03.227 2.196.227Z"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>
  );
}

export default Fold;
