const ThemeWrapper = ({ children }) => {
    return (
      <div className="bg-white dark:bg-[#333333] text-[#333333] dark:text-white">
        {children}
      </div>
    );
  };
  
  export default ThemeWrapper;
  