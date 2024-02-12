const PageWrapper = ({ children, actions, title }) => {
  return (
    <div className="flex flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <div className="flex items-center space-x-2">{actions}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
