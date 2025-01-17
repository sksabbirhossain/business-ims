const Container = ({ children, className }) => {
  return (
    <main className={`space-y-4 md:space-y-6 ${className}`}>
      {children}
    </main>
  );
};

export default Container;
