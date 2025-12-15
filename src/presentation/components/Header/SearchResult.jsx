// import "./SearchResult.css";
// import { fetchBooks } from "../../../service/apiservice";
// import { useNavigate } from "react-router-dom";
// export const SearchResult = ({ result }) => {
//   let books = fetchBooks();
//   const navigate = useNavigate();
//   const handleOnClickSearch = () => {
//     let book = books.find((item) => item.name == result);
//     navigate(`/book/${book.id}`);
//   };
//   return (
//     <div className="search-result" onClick={(e) => handleOnClickSearch(e)}>
//       {result}
//     </div>
//   );
// };

import "./SearchResult.css";
import { useNavigate } from "react-router-dom";

export const SearchResult = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="search-result" onClick={() => navigate(`/book/${book.id}`)}>
      {book.name}
    </div>
  );
};
