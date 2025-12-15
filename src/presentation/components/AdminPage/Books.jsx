// import { Link, useNavigate } from "react-router-dom";
// import { fetchBooks } from "../../../service/apiservice";
// import "./Books.css";

// const Books = () => {
//   let products = fetchBooks();
//   const navigate = useNavigate();

//   return (
//     <div className="container mt-4">
//       {/* Thêm tiêu đề và nút thêm sản phẩm */}
//       <div className="admin-header">
//         <h2 className="admin-title">Quản lý sản phẩm</h2>
//         <button
//           className="add-button"
//           onClick={() => navigate("/admin/add_book")}
//         >
//           Thêm sản phẩm mới
//         </button>
//       </div>

//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Hình ảnh</th>
//             <th>Tên sản phẩm</th>
//             <th>Giá</th>
//             <th>Thao tác</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <img
//                     src={item.images[0].base_url}
//                     alt={item.name}
//                     width="50"
//                   />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>
//                   {item.current_seller && item.current_seller.price
//                     ? item.current_seller.price.toLocaleString("vi-VN") + "đ"
//                     : "Giá không có"}
//                 </td>
//                 <td>
//                   <Link to={`/admin/edit/${item.id}`}>
//                     <button className="btn btn-primary btn-sm mx-1">Sửa</button>
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center">
//                 Không có sản phẩm nào.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Books;


import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BookRepository from "../../../infrastructure/repositories/book_repository.js";
import GetAllBookService from "../../../usecases/book/get_all_book_service.js";

import "./Books.css";

const Books = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const repo = new BookRepository();
      const usecase = new GetAllBookService(repo);

      try {
        const data = await usecase.execute();
        setProducts(data);
      } catch (err) {
        console.error("Lỗi tải sách:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="admin-header">
        <h2 className="admin-title">Quản lý sản phẩm</h2>
        <button
          className="add-button"
          onClick={() => navigate("/admin/add_book")}
        >
          Thêm sản phẩm mới
        </button>
      </div>

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={item.images?.[0]?.baseUrl}
                    alt={item.name}
                    width="50"
                  />
                </td>

                <td>{item.name}</td>

                <td>
                  {item.listPrice ? item.listPrice.toLocaleString("vi-VN") + "₫" : "Không có"}
                </td>

                <td>
                  <Link to={`/admin/edit/${item.id}`}>
                    <button className="btn btn-primary btn-sm mx-1">Sửa</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Không có sản phẩm nào.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
