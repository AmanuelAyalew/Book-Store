import { useContext } from "react";
import { ThemeContext } from "../../context";

const BookDetailsModal = ({ book, onClose, onCartAdd }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-white/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white modal-text shadow-md dark:bg-[#374be5] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={book?.cover}
            alt=""
          />
          <div className="p-5 lg:p-11">
            <div className="modal-text">
              <h2 className="text-base lg:text-[50px] mb-2 font-bold">
                {book?.title}
              </h2>
              <span className="block text-base  text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {book?.genre}
              </span>
              <div></div>
            </div>
            <p className="text-sm lg:text-base mb-8 lg:mb-16">
              {book?.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-2">
              <a
                className="dark:bg-[#000000] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#ffffff] font-semibold text-sm"
                href="#"
                onClick={(e) => onCartAdd(e, book)}
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${book?.price} | Add to Cart</span>
              </a>
              <a
                className="border border-[#ffffff] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#000000] dark:bg-[#ffffff] font-semibold text-sm"
                href="#"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsModal;
