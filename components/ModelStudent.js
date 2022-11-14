export default function ModelStudent({
  name,
  degree,
  semester,
  department,
  batch,
  institute,
  image_url,
}) {
  return (
    <div className="flex flex-col md:flex-row bg-teal-700 bg-opacity-50 shadow rounded-lg">
      <div className="w-full md:w-32 h-48 md:h-full">
        <img
          className="object-cover w-full h-full rounded-t-lg md:rounded-tr-none md:rounded-l-lg flex-shrink-0"
          src={image_url}
          alt={name}
        />
      </div>
      <div className="flex flex-col flex-1 justify-between text-sm">
        <div className="p-4">
          <p className="text-base md:text-lg font-bold">{name}</p>
          <p className="pt-1">
            {degree} - {semester}, {department}
          </p>
        </div>
        <div>
          <p className="px-4 pb-2 pt-2 font-medium">Batch - {batch}</p>
          <p className="bg-teal-700 p-4 w-full font-medium text-teal-100 rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
            {institute}
          </p>
        </div>
      </div>
    </div>
  );
}
