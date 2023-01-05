/** @format */

export default function Checkbox({ label, checked = "pending" }) {
  return (
    <div className="flex items-center gap-2 text-gray-500">
      {checked === "completed" ? (
        <svg
          aria-hidden={true}
          className="shrink-0"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4895 0.923218H3.6006C1.63692 0.923218 0.0450439 2.51509 0.0450439 4.47877V13.3677C0.0450439 15.3313 1.63692 16.9232 3.6006 16.9232H12.4895C14.4532 16.9232 16.045 15.3313 16.045 13.3677V4.47877C16.045 2.51509 14.4532 0.923218 12.4895 0.923218Z"
            fill="#16A34A"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.122 6.70781C11.3638 6.93445 11.376 7.31415 11.1494 7.5559L7.81605 11.1115C7.59365 11.3487 7.22275 11.3656 6.97971 11.1495L4.97971 9.37176C4.73204 9.15161 4.70973 8.77236 4.92988 8.52469C5.15003 8.27702 5.52928 8.25472 5.77695 8.47487L7.34023 9.86446L10.2739 6.73517C10.5006 6.49342 10.8803 6.48117 11.122 6.70781Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          aria-hidden={true}
          className="shrink-0"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0V0C12.4183 0 16 3.58172 16 8V8C16 12.4183 12.4183 16 8 16V16C3.58172 16 0 12.4183 0 8V8Z"
            fill="#D5D5D5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.77637 8.21632C3.77637 7.77449 4.13454 7.41632 4.57637 7.41632H11.4234C11.8652 7.41632 12.2234 7.77449 12.2234 8.21632C12.2234 8.65815 11.8652 9.01632 11.4234 9.01632H4.57637C4.13454 9.01632 3.77637 8.65815 3.77637 8.21632Z"
            fill="white"
          />
        </svg>
      )}
      <p>{label}</p>
    </div>
  );
}
