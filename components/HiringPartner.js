export default function HiringPartner({ title, url, logoSrc }) {
  return (
    <a
      href={url}
      target="_blank"
      className="col-span-1 flex justify-center items-center p-8 rounded-md hover:shadow-lg z-10 relative transition"
    >
      <img
        className="max-h-16"
        src={`https://wd.pupilfirst.org/hiring-network/${logoSrc}`}
        alt={title}
      />
    </a>
  );
}
