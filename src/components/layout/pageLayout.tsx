export type AppLayoutProps = {
  first?: React.ReactNode;
  second?: React.ReactNode;
  third?: React.ReactNode;
};

export type CellLayoutProps = {
  children?: React.ReactNode;
};

function MainNav({ children }: CellLayoutProps) {
  return <>{children}</>;
}
export default function AppLayout({ first, second, third }: AppLayoutProps) {
  return (
    <>
      {first}
      {second}
      {third}
    </>
  );
}
function First({ children }: CellLayoutProps) {
  return <>{children}</>;
}
function Second({ children }: CellLayoutProps) {
  return <>{children}</>;
}
function Third({ children }: CellLayoutProps) {
  return <>{children}</>;
}

AppLayout.MainNav = MainNav;
AppLayout.First = First;
AppLayout.Second = Second;
AppLayout.Third = Third;
