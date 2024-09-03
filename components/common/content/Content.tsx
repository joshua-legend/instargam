export type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <main className="max-w-md m-auto">
      <section className="flex flex-col">{children}</section>
    </main>
  );
};
export default Content;
