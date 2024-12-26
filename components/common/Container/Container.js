const Container = ({ children, className }) => {
  return (
    <section className={`space-y-4 md:space-y-6 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
