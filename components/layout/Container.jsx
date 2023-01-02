/** @format */

export default function Container({ children, className }) {
  return (
    <div className={`max-w-7xl mx-auto px-3 md:px-5 ${className ? className : ""}`}>
      {children}
    </div>
  );
}
