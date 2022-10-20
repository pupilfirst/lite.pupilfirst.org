/** @format */

export default function DescriptionList({ heading, content, children }) {
  return (
    <div className="-ml-4">
      <h3 className="heading-with-underscore text-xl lg:text-5xl text-secondary-500 font-bold">
        {heading}
      </h3>
      <div className="ml-8 pt-4 text-sm lg:text-lg ">{content}</div>
      {children && (
        <div className="ml-8 pt-2 text-sm lg:text-lg">{children}</div>
      )}
    </div>
  );
}
