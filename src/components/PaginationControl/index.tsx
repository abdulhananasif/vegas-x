interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
}

const PaginationControl = ({
  currentPage,
  totalPages,
}: PaginationControlProps) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
        <div
          key={page}
          className={`bg-[#420571] text-white font-bold !p-3 text-xl rounded-lg rounded-bl-none rounded-tr-none ${
            page === currentPage + 1 ? 'opacity-70' : ''
          }`}
        >
          <p>{page}</p>
        </div>
      ))}
    </div>
  );
};

export default PaginationControl;
