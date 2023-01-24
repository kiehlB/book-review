export type BackIconProps = {
  className?: string;
};

function BackIcon({ className }: BackIconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 8 12">
      <path
        width={24}
        height={24}
        d="m6.667 1-5 5 5 5"
        stroke="#64748b"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"></path>
    </svg>
  );
}

export default BackIcon;
