import Navbar from "../navbar";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export default function Main({ children }: Props) {
  return (
    <main>
      <div className="container">
        <Navbar />

        {children}
      </div>
    </main>
  );
}
