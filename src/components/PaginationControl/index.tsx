import Image from '../ui/Image';

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
        <div className="relative flex items-center justify-center w-10 h-10">
          <Image
            src="src/assets/pagesphere.png"
            alt="page"
            key={page}
            className={`w-full h-full object-cover ${
              page === currentPage + 1 ? 'opacity-30' : ''
            }`}
          />
          <p className="absolute -translate-x-1/2 left-1/2 font-semibold text-base text-white">
            {page}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PaginationControl;
