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
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
    </div>
  );
};

export default PaginationControl;
