// // import Header from "../Header/Header";
// // import Footer from "../Footer/Footer";
// // import { useParams } from "react-router-dom";
// // import React, { useState, useEffect } from "react";
// // import { fetchBooks } from "../../../service/apiservice";

// // function BookDetail() {
// //   const { id } = useParams();
// //   let products = fetchBooks();
// //   let book = products.find((item) => item.id == id);

// //   return (
// //     <>
// //       <Header />
// //       <main className="row mx-5 gap-2 d-flex flex-wrap my-3">
// //         <div style={{ height: "700px" }} className="row col-md-3 col-lg-3 d-sm">
// //           <div className="card h-100">
// //             <img
// //               className="my-3"
// //               src={book ? book.images[0].base_url : ""}
// //               alt=""
// //             />
// //             <div className="p-3 pb-3">
// //               <h6>
// //                 <strong>Đặc điểm nổi bật</strong>
// //               </h6>
// //               <div className="d-flex">
// //                 <div>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     class="bi bi-check-circle-fill text-primary me-2"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
// //                   </svg>
// //                 </div>
// //                 <span style={{ fontSize: "14px" }}>
// //                   Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.
// //                 </span>
// //               </div>
// //               <div className="d-flex">
// //                 <div>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     class="bi bi-check-circle-fill text-primary me-2"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
// //                   </svg>
// //                 </div>
// //                 <span style={{ fontSize: "14px" }}>
// //                   Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của
// //                   trẻ em.
// //                 </span>
// //               </div>
// //               <div className="d-flex">
// //                 <div>
// //                   <svg
// //                     xmlns="http://www.w3.org/2000/svg"
// //                     width="16"
// //                     height="16"
// //                     fill="currentColor"
// //                     class="bi bi-check-circle-fill text-primary me-2"
// //                     viewBox="0 0 16 16"
// //                   >
// //                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
// //                   </svg>
// //                 </div>
// //                 <span style={{ fontSize: "14px" }}>
// //                   Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ
// //                   của các quốc gia.
// //                 </span>
// //               </div>
// //             </div>
// //             <div className="card-footer">
// //               <button className="border border-0 ">
// //                 <div>
// //                   <img
// //                     style={{ width: "30px" }}
// //                     src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
// //                     alt=""
// //                   />
// //                   <span
// //                     className="text-secondary mx-2"
// //                     style={{ fontSize: "10px" }}
// //                   >
// //                     Xem thêm
// //                   </span>
// //                   <span style={{ fontSize: "10px" }}>
// //                     Tóm tắt nội dung Sách
// //                   </span>
// //                   <img
// //                     className="ms-3"
// //                     style={{ width: "20px" }}
// //                     src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png"
// //                     alt=""
// //                   />
// //                 </div>
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="row col-md-6 col-lg-6 d-sm">
// //           <div className="card h-100">
// //             <div>
// //               <img
// //                 style={{ width: "80px", height: "20px" }}
// //                 src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
// //                 className="card-img-top mx-3"
// //                 alt="..."
// //               />
// //               <span>
// //                 Tác giả:{" "}
// //                 <span className="text-primary">
// //                   {book && book.authors ? book.authors[0].name : ""}
// //                 </span>
// //               </span>
// //             </div>

// //             <div className="card-body">
// //               <h5 className="card-title">{book ? book.name : ""}</h5>
// //               <div>
// //                 <span className="mx-2" style={{ fontSize: "14px" }}>
// //                   {book ? book.rating_average : ""}
// //                 </span>
// //                 <span className="text-warning">★★★★★</span>
// //                 <span
// //                   className="ps-1 ms-1"
// //                   style={{ fontSize: "10px", color: "#808089" }}
// //                 >
// //                   {book && book.quantity_sold ? book.quantity_sold.value : ""}
// //                 </span>
// //                 <span
// //                   className="border-start ps-2 ms-2"
// //                   style={{ fontSize: "10px", color: "#808089" }}
// //                 >
// //                   {book && book.quantity_sold ? book.quantity_sold.text : ""}
// //                 </span>
// //               </div>
// //               <div className="d-flex ms-2">
// //                 <div className="d-flex">
// //                   <div style={{ fontSize: "20px", fontWeight: 600 }}>
// //                     {book && book.current_seller && book.current_seller.price
// //                       ? book.current_seller.price.toLocaleString("vi-VN") + "₫"
// //                       : "Giá không có"}
// //                   </div>
// //                 </div>
// //                 <div className="mt-1 ms-1">
// //                   <span
// //                     className="badge rounded-pill text-black"
// //                     style={{
// //                       backgroundColor: "#c1c6cd",
// //                       fontSize: "12px",
// //                       fontWeight: 600,
// //                     }}
// //                   >
// //                     -
// //                     {book &&
// //                       (
// //                         ((book.original_price - book.current_seller.price) /
// //                           book.original_price) *
// //                         100
// //                       ).toFixed(2)}
// //                     %
// //                   </span>
// //                 </div>
// //               </div>
// //               <div
// //                 className="mt-4 ms-2 mb-2"
// //                 style={{ fontSize: "16px", fontWeight: 600 }}
// //               >
// //                 Thông tin chi tiết
// //               </div>

// //               <div>
// //                 <table class="table table-light">
// //                   <tbody>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Phiên bản sách</td>
// //                       <td>Phiên bản thường</td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Công ty phát hành</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "publisher_vn"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Ngày xuất bản</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "publication_date"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Kích thước</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "dimensions"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Dịch Giả</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "dich_gia"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Loại bìa</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "book_cover"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr>
// //                       <td style={{ color: "#808089" }}>Số trang</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "number_of_page"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                     <tr style={{ border: "white" }}>
// //                       <td style={{ color: "#808089" }}>Nhà xuất bản</td>
// //                       <td>
// //                         {book?.specifications[0]?.attributes.find(
// //                           (attr) => attr.code === "manufacturer"
// //                         )?.value || "N/A"}
// //                       </td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
// //               <hr />
// //               <div className="col">
// //                 <div className="border border-0 rounded overflow-hidden">
// //                   <div
// //                     className="p-3 pb-0"
// //                     style={{ fontSize: "16px", fontWeight: 600 }}
// //                   >
// //                     Mô tả sản phẩm
// //                   </div>
// //                   <div className="p-3">
// //                     <img
// //                       className="object-fit-contain"
// //                       style={{ width: "100%", height: "100%" }}
// //                       src={book?.images[0]?.base_url}
// //                     />
// //                   </div>
// //                   <div className="p-3">
// //                     <div
// //                       dangerouslySetInnerHTML={{
// //                         __html: book?.description || "N/A",
// //                       }}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div
// //           style={{ height: "250px" }}
// //           className="row col-md-3 col-lg-3 d-sm "
// //         >
// //           <div className="card h-100 border">
// //             <span className="fw-bolder">Số Lượng</span>
// //             <nav aria-label="...">
// //               <ul className="pagination pagination-sm m-1 mx-3">
// //                 <li className="page-item me-1 border">
// //                   <a
// //                     className="page-link text-secondary bg-secondary bg-opacity-10"
// //                     href="#"
// //                   >
// //                     -
// //                   </a>
// //                 </li>
// //                 <li className="page-item me-1 border " aria-current="page">
// //                   <span className="page-link text-dark">1</span>
// //                 </li>
// //                 <li className="page-item border ">
// //                   <a className="page-link text-secondary" href="#">
// //                     +
// //                   </a>
// //                 </li>
// //               </ul>
// //             </nav>
// //             <span className="fw-bolder">Tạm tính</span>
// //             <div className="d-grid gap-2 mx-2">
// //               <button className="btn btn-danger" type="button">
// //                 Mua ngay
// //               </button>
// //               <button className="btn btn-outline-primary" type="button">
// //                 Thêm vào giỏ
// //               </button>
// //               <button className="btn btn-outline-primary mb-4" type="button">
// //                 Mua trước trả sau
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default BookDetail;
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// import BookRepository from "../../../infrastructure/repositories/book_repository";
// import GetBookDetailUseCase from "../../../usecases/book/get_book_detail_service";

// function BookDetail() {
//   const { id } = useParams();

//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     const loadBook = async () => {
//       try {
//         const repo = new BookRepository();
//         const usecase = new GetBookDetailUseCase(repo);
//         const data = await usecase.execute(id);
//         setBook(data);
//       } catch (error) {
//         console.error("Lỗi khi lấy thông tin sách:", error);
//       }
//     };

//     loadBook();
//   }, [id]);

//   if (!book) {
//     return (
//       <>
//         <Header />
//         <p className="text-center mt-5">Đang tải dữ liệu...</p>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <main className="row mx-5 gap-2 d-flex flex-wrap my-3">

//         {/* Ảnh & mô tả bên trái */}
//         <div style={{ height: "700px" }} className="row col-md-3 col-lg-3 d-sm">
//           <div className="card h-100">
//             <img
//               className="my-3"
//               src={book.images?.[0]?.baseUrl}
//               alt="Ảnh sản phẩm"
//             />

//             <div className="p-3 pb-3">
//               <h6>
//                 <strong>Đặc điểm nổi bật</strong>
//               </h6>

//               {[1, 2, 3].map((i) => (
//                 <div className="d-flex" key={i}>
//                   <div>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       fill="currentColor"
//                       className="bi bi-check-circle-fill text-primary me-2"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                     </svg>
//                   </div>
//                   <span style={{ fontSize: "14px" }}>
//                     {`Nội dung đặc điểm nổi bật ${i}`}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="card-footer">
//               <button className="border border-0 ">
//                 <div>
//                   <img
//                     style={{ width: "30px" }}
//                     src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
//                     alt=""
//                   />
//                   <span
//                     className="text-secondary mx-2"
//                     style={{ fontSize: "10px" }}
//                   >
//                     Xem thêm
//                   </span>
//                   <span style={{ fontSize: "10px" }}>
//                     Tóm tắt nội dung Sách
//                   </span>
//                   <img
//                     className="ms-3"
//                     style={{ width: "20px" }}
//                     src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png"
//                     alt=""
//                   />
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Nội dung chính */}
//         <div className="row col-md-6 col-lg-6 d-sm">
//           <div className="card h-100">
//             <div>
//               <span>
//                 Tác giả:{" "}
//                 <span className="text-primary">
//                   {book.authors?.[0]?.name || ""}
//                 </span>
//               </span>
//             </div>

//             <div className="card-body">
//               <h5 className="card-title">{book.name}</h5>

//               {/* Rating + Sold */}
//               <div>
//                 <span className="mx-2" style={{ fontSize: "14px" }}>
//                   {book.ratingAverage}
//                 </span>
//                 <span className="text-warning">★★★★★</span>

//                 <span
//                   className="ps-1 ms-2"
//                   style={{ fontSize: "10px", color: "#808089" }}
//                 >
//                   {/* {book. || 0} đã bán */}
//                 </span>
//               </div>

//               {/* Giá */}
//               <div className="d-flex ms-2 mt-2">
//                 <div className="d-flex align-items-center">
//   <div style={{ fontSize: "20px", fontWeight: 600 }}>
//     {book.sellers?.[0]?.price
//       ? book.sellers[0].price.toLocaleString("vi-VN") + "₫"
//       : "Không có giá"}
//   </div>

//   {book.originalPrice && (
//     <>
//       <div
//         className="ms-3 text-decoration-line-through text-secondary"
//         style={{ fontSize: "14px" }}
//       >
//         {book.originalPrice.toLocaleString("vi-VN")}₫
//       </div>

//       <div
//         className="ms-2 px-2 py-1 rounded"
//         style={{
//           background: "#f0f0f0",
//           fontSize: "12px",
//           color: "#ff424e",
//           fontWeight: 600,
//         }}
//       >
//         -{Math.round(((book.originalPrice - book.sellers[0].price) / book.originalPrice) * 100)}%
//       </div>
//     </>
//   )}
// </div>

//               </div>

//               {/* Thông tin chi tiết */}
//               <div
//                 className="mt-4 ms-2 mb-2"
//                 style={{ fontSize: "16px", fontWeight: 600 }}
//               >
//                 Thông tin chi tiết
//               </div>

//               <table className="table table-light">
//                 <tbody>
//                   {book.attributes?.map((attr, idx) => (
//                     <tr key={idx}>
//                       <td style={{ color: "#808089" }}>{attr.name}</td>
//                       <td>{attr.value}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <hr />

//               {/* Mô tả sản phẩm */}
//               <div className="col">
//                 <div className="border border-0 rounded overflow-hidden">

//                   <div
//                     className="p-3 pb-0"
//                     style={{ fontSize: "16px", fontWeight: 600 }}
//                   >
//                     Mô tả sản phẩm
//                   </div>

//                   <div className="p-3">
//                     <img
//                       className="object-fit-contain"
//                       style={{ width: "100%", height: "100%" }}
//                       src={book.images?.[0]?.baseUrl}
//                       alt=""
//                     />
//                   </div>

//                   <div className="p-3">
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: book.description || "Không có mô tả",
//                       }}
//                     />
//                   </div>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mua hàng */}
//         <div style={{ height: "250px" }} className="row col-md-3 col-lg-3 d-sm">
//           <div className="card h-100 border">
//             <span className="fw-bolder">Số Lượng</span>

//             <nav aria-label="...">
//               <ul className="pagination pagination-sm m-1 mx-3">
//                 <li className="page-item me-1 border">
//                   <a className="page-link text-secondary bg-secondary bg-opacity-10">-</a>
//                 </li>
//                 <li className="page-item me-1 border ">
//                   <span className="page-link text-dark">1</span>
//                 </li>
//                 <li className="page-item border ">
//                   <a className="page-link text-secondary">+</a>
//                 </li>
//               </ul>
//             </nav>

//             <span className="fw-bolder">Tạm tính</span>

//             <div className="d-grid gap-2 mx-2">
//               <button className="btn btn-danger">Mua ngay</button>
//               <button className="btn btn-outline-primary">Thêm vào giỏ</button>
//               <button className="btn btn-outline-primary mb-4">Mua trước trả sau</button>
//             </div>
//           </div>
//         </div>

//       </main>

//       <Footer />
//     </>
//   );
// }

// export default BookDetail;


import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import BookRepository from "../../../infrastructure/repositories/book_repository";
import GetBookDetailUseCase from "../../../usecases/book/get_book_detail_service";
import { cartRepository } from "../../../infrastructure/repositories/cart_repository";
import AddToCartUseCase from "../../../usecases/cart/add_to_cart_usecase";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const repo = new BookRepository();
        const usecase = new GetBookDetailUseCase(repo);
        const data = await usecase.execute(id);
        setBook(data);
      } catch (error) {
        console.error("Lỗi khi lấy thông tin sách:", error);
      }
    };

    loadBook();
  }, [id]);

  // ========== XỬ LÝ THÊM VÀO GIỎ HÀNG ==========
  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');

    // 1. Kiểm tra đăng nhập
    if (!token) {
      const shouldLogin = window.confirm(
        'Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.\nBạn có muốn đăng nhập ngay không?'
      );
      
      if (shouldLogin) {
        // Lưu URL hiện tại để quay lại sau khi login
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        navigate('/login');
      }
      return;
    }
    console.log("book",book)
    // 2. Kiểm tra có seller không
    if (!book.sellers || book.sellers.length === 0) {
      alert('Sản phẩm hiện không có nhà bán hàng');
      return;
    }

    console.log('📝 Book data:', {
      token,
    bookId: book.id,
    sellerId: book.sellers[0].id,
    quantity: quantity,
    price: book.sellers[0].price
  });

    // 3. Thêm vào giỏ hàng
    setLoading(true);
    try {
      const addToCartUseCase = new AddToCartUseCase(cartRepository);
      
      await addToCartUseCase.execute(
        token,
        book.id,           // bookId
        book.sellers[0].id,  // sellerId (lấy seller đầu tiên)
        quantity,              // số lượng
        book.sellers[0].price  // giá
      );

      // Thành công
       const goToCart = window.confirm(
      `✅ Đã thêm "${book.name}" vào giỏ hàng!\n\nBạn có muốn xem giỏ hàng không?`
    );
      if (goToCart) {
        navigate('/cart');
      }

    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ:', error);

      if (error.message === 'UNAUTHORIZED') {
        // Token hết hạn
        localStorage.removeItem('token');
        alert('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
        navigate('/login');
      } else {
        alert('Có lỗi xảy ra: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // ========== XỬ LÝ MUA NGAY ==========
  const handleBuyNow = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      const shouldLogin = window.confirm(
        'Vui lòng đăng nhập để mua hàng.\nBạn có muốn đăng nhập ngay không?'
      );
      
      if (shouldLogin) {
        localStorage.setItem('redirectAfterLogin', window.location.pathname);
        navigate('/login');
      }
      return;
    }

    // Thêm vào giỏ và chuyển đến trang thanh toán
    await handleAddToCart();
    navigate('/checkout');
  };

  // ========== XỬ LÝ TĂNG/GIẢM SỐ LƯỢNG ==========
  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Loading state
  if (!book) {
    return (
      <>
        <Header />
        <p className="text-center mt-5">Đang tải dữ liệu...</p>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="row mx-5 gap-2 d-flex flex-wrap my-3">

        {/* Ảnh & mô tả bên trái */}
        <div style={{ height: "700px" }} className="row col-md-3 col-lg-3 d-sm">
          <div className="card h-100">
            <img
              className="my-3"
              src={book.images?.[0]?.baseUrl}
              alt="Ảnh sản phẩm"
            />

            <div className="p-3 pb-3">
              <h6>
                <strong>Đặc điểm nổi bật</strong>
              </h6>

              {[1, 2, 3].map((i) => (
                <div className="d-flex" key={i}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-primary me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: "14px" }}>
                    {`Nội dung đặc điểm nổi bật ${i}`}
                  </span>
                </div>
              ))}
            </div>

            <div className="card-footer">
              <button className="border border-0 ">
                <div>
                  <img
                    style={{ width: "30px" }}
                    src="https://salt.tikicdn.com/ts/ta/d3/d4/1c/1d4ee6bf8bc9c5795529ac50a6b439dd.png"
                    alt=""
                  />
                  <span
                    className="text-secondary mx-2"
                    style={{ fontSize: "10px" }}
                  >
                    Xem thêm
                  </span>
                  <span style={{ fontSize: "10px" }}>
                    Tóm tắt nội dung Sách
                  </span>
                  <img
                    className="ms-3"
                    style={{ width: "20px" }}
                    src="https://salt.tikicdn.com/ts/ta/5c/76/e2/25aa7773e0480b23252d8f1c95a03d05.png"
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Nội dung chính */}
        <div className="row col-md-6 col-lg-6 d-sm">
          <div className="card h-100">
            <div>
              <span>
                Tác giả:{" "}
                <span className="text-primary">
                  {book.authors?.[0]?.name || ""}
                </span>
              </span>
            </div>

            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>

              {/* Rating + Sold */}
              <div>
                <span className="mx-2" style={{ fontSize: "14px" }}>
                  {book.ratingAverage}
                </span>
                <span className="text-warning">★★★★★</span>
              </div>

              {/* Giá */}
              <div className="d-flex ms-2 mt-2">
                <div className="d-flex align-items-center">
                  <div style={{ fontSize: "20px", fontWeight: 600 }}>
                    {book.sellers?.[0]?.price
                      ? book.sellers[0].price.toLocaleString("vi-VN") + "₫"
                      : "Không có giá"}
                  </div>

                  {book.originalPrice && (
                    <>
                      <div
                        className="ms-3 text-decoration-line-through text-secondary"
                        style={{ fontSize: "14px" }}
                      >
                        {book.originalPrice.toLocaleString("vi-VN")}₫
                      </div>

                      <div
                        className="ms-2 px-2 py-1 rounded"
                        style={{
                          background: "#f0f0f0",
                          fontSize: "12px",
                          color: "#ff424e",
                          fontWeight: 600,
                        }}
                      >
                        -{Math.round(((book.originalPrice - book.sellers[0].price) / book.originalPrice) * 100)}%
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Thông tin chi tiết */}
              <div
                className="mt-4 ms-2 mb-2"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                Thông tin chi tiết
              </div>

              <table className="table table-light">
                <tbody>
                  {book.attributes?.map((attr, idx) => (
                    <tr key={idx}>
                      <td style={{ color: "#808089" }}>{attr.name}</td>
                      <td>{attr.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <hr />

              {/* Mô tả sản phẩm */}
              <div className="col">
                <div className="border border-0 rounded overflow-hidden">
                  <div
                    className="p-3 pb-0"
                    style={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    Mô tả sản phẩm
                  </div>

                  <div className="p-3">
                    <img
                      className="object-fit-contain"
                      style={{ width: "100%", height: "100%" }}
                      src={book.images?.[0]?.baseUrl}
                      alt=""
                    />
                  </div>

                  <div className="p-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: book.description || "Không có mô tả",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== PANEL MUA HÀNG (ĐÃ SỬA) ========== */}
        <div style={{ height: "300px" }} className="row col-md-3 col-lg-3 d-sm">
          <div className="card h-100 border">
            <span className="fw-bolder p-3 pb-0">Số Lượng</span>

            <nav aria-label="Quantity selector">
              <ul className="pagination pagination-sm m-1 mx-3">
                <li className="page-item me-1 border">
                  <button
                    className="page-link text-secondary bg-secondary bg-opacity-10"
                    onClick={handleDecreaseQuantity}
                    disabled={quantity <= 1 || loading}
                  >
                    -
                  </button>
                </li>
                <li className="page-item me-1 border">
                  <span className="page-link text-dark">{quantity}</span>
                </li>
                <li className="page-item border">
                  <button
                    className="page-link text-secondary"
                    onClick={handleIncreaseQuantity}
                    disabled={loading}
                  >
                    +
                  </button>
                </li>
              </ul>
            </nav>

            <span className="fw-bolder p-3 pb-2">Tạm tính</span>
            <div className="px-3 pb-2 fw-bold" style={{ fontSize: "18px", color: "#ff424e" }}>
              {book.sellers?.[0]?.price
                ? (book.sellers[0].price * quantity).toLocaleString("vi-VN") + "₫"
                : "0₫"}
            </div>

            <div className="d-grid gap-2 mx-2 mb-3">
              <button
                className="btn btn-danger"
                onClick={handleBuyNow}
                disabled={loading}
              >
                {loading ? 'Đang xử lý...' : 'Mua ngay'}
              </button>

              <button
                className="btn btn-outline-primary"
                onClick={handleAddToCart}
                disabled={loading}
              >
                {loading ? 'Đang thêm...' : 'Thêm vào giỏ'}
              </button>

              <button className="btn btn-outline-primary">
                Mua trước trả sau
              </button>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

export default BookDetail;