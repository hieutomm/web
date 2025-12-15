// import { useState, useEffect } from "react";
// import {
//   addBook,
//   updateBook,
//   deleteBook,
//   fetchCategories,
// } from "../../../service/apiservice";
// import { useNavigate, useParams } from "react-router-dom";
// import "./AdminContent.css";

// const AdminContent = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   // Hàm tạo ID ngẫu nhiên
//   const generateId = () => crypto.randomUUID();

//   // State cho thông tin sản phẩm
//   const [formData, setFormData] = useState({
//     name: "",
//     authors: [{ id: "", name: "", slug: "" }],
//     categories: { id: "", name: "", is_leaf: false },
//     current_seller: { id: 1, price: "" },
//     description: "",
//     images: [{ base_url: "" }],
//     list_price: "",
//     original_price: "",
//     rating_average: "",
//     short_description: "",
//     specifications: [{ name: "Thông tin chung", attributes: [] }],
//   });

//   // State chứa danh sách danh mục cho dropdown
//   const [categories, setCategories] = useState([]);

//   // Nếu có id (chỉnh sửa) thì tải dữ liệu sách
//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:5002/books/${id}`)
//         .then((response) => response.json())
//         .then((data) => {
//           if (data) {
//             setFormData({
//               name: data.name || "",
//               authors:
//                 data.authors?.length > 0
//                   ? data.authors
//                   : [{ id: "", name: "", slug: "" }],
//               categories: data.categories || {
//                 id: "",
//                 name: "",
//                 is_leaf: false,
//               },
//               current_seller: data.current_seller || { id: 1, price: "" },
//               description: data.description || "",
//               images:
//                 data.images?.length > 0 ? data.images : [{ base_url: "" }],
//               list_price: data.list_price || "",
//               original_price: data.original_price || "",
//               rating_average: data.rating_average || "",
//               short_description: data.short_description || "",
//               specifications:
//                 data.specifications?.length > 0
//                   ? data.specifications
//                   : [{ name: "Thông tin chung", attributes: [] }],
//             });
//           }
//         })
//         .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
//     }
//   }, [id]);

//   // Tải danh mục từ API khi component mount
//   useEffect(() => {
//     const loadCategories = async () => {
//       try {
//         const data = await fetchCategories();
//         setCategories(data);
//       } catch (error) {
//         console.error("Lỗi khi lấy danh mục:", error);
//       }
//     };
//     loadCategories();
//   }, []);

//   // Hàm xử lý thay đổi cho các ô input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Xử lý thay đổi dropdown cho danh mục
//   const handleCategoryChange = (e) => {
//     const selectedId = e.target.value;
//     const selectedCategory = categories.find(
//       (cat) => String(cat.id) === selectedId
//     );
//     setFormData({
//       ...formData,
//       categories: selectedCategory || { id: "", name: "", is_leaf: false },
//     });
//   };

//   // Hàm submit form (thêm mới hoặc cập nhật sách)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedData = {
//       ...formData,
//       authors: formData.authors.map((author) => ({
//         ...author,
//         id: author.id || generateId(),
//       })),
//       categories: {
//         ...formData.categories,
//         id: formData.categories.id || generateId(),
//       },
//     };

//     try {
//       if (id) {
//         await updateBook(id, updatedData);
//         alert("Cập nhật sản phẩm thành công!");
//       } else {
//         await addBook(updatedData);
//         alert("Thêm sản phẩm thành công!");
//       }
//       navigate("/admin");
//     } catch (error) {
//       console.error("Lỗi khi xử lý sản phẩm:", error);
//     }
//   };

//   // Hàm xử lý xóa sản phẩm
//   const handleDelete = async () => {
//     if (window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
//       try {
//         await deleteBook(id);
//         alert("Xóa sản phẩm thành công!");
//         navigate("/admin");
//       } catch (error) {
//         console.error("Lỗi khi xóa sản phẩm:", error);
//       }
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>{id ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Tên sách */}
//         <div className="mb-3">
//           <label className="form-label">Tên sách</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Tác giả */}
//         <div className="mb-3">
//           <label className="form-label">Tác giả</label>
//           <input
//             type="text"
//             name="authors[0].name"
//             className="form-control"
//             value={formData.authors[0].name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 authors: [{ ...formData.authors[0], name: e.target.value }],
//               })
//             }
//             required
//           />
//         </div>

//         {/* Giá bán */}
//         <div className="mb-3">
//           <label className="form-label">Giá bán</label>
//           <input
//             type="number"
//             name="current_seller.price"
//             className="form-control"
//             value={formData.current_seller.price}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 current_seller: {
//                   ...formData.current_seller,
//                   price: e.target.value,
//                 },
//               })
//             }
//             required
//           />
//         </div>

//         {/* Giá gốc */}
//         <div className="mb-3">
//           <label className="form-label">Giá gốc</label>
//           <input
//             type="number"
//             name="original_price"
//             className="form-control"
//             value={formData.original_price}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Dropdown chọn danh mục */}
//         <div className="mb-3">
//           <label className="form-label">Danh mục</label>
//           <select
//             className="form-control"
//             value={formData.categories.id}
//             onChange={handleCategoryChange}
//             required
//           >
//             <option value="">-- Chọn danh mục --</option>
//             {categories.map((cat) => (
//               <option key={cat.id} value={cat.id}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* URL ảnh */}
//         <div className="mb-3">
//           <label className="form-label">URL Ảnh</label>
//           <input
//             type="text"
//             name="images.base_url"
//             className="form-control"
//             value={formData.images[0].base_url}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 images: [{ base_url: e.target.value }],
//               })
//             }
//             required
//           />
//         </div>

//         {/* Nút submit */}
//         <button type="submit" className="btn btn-primary">
//           {id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
//         </button>
//         {id && (
//           <button
//             type="button"
//             className="btn btn-danger mx-3"
//             onClick={handleDelete}
//           >
//             Xóa sản phẩm
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default AdminContent;




import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import GetBookByIdUseCase from "../../../usecases/book/get_book_by_id_usecase";
import CreateBookUseCase from "../../../usecases/book/create_book_service";
import UpdateBookUseCase from "../../../usecases/book/update_book_service";
import DeleteBookUseCase from "../../../usecases/book/delete_book_service";
import GetAllCategoriesUseCase from "../../../usecases/categori/get_all_categori_service";

import bookRepository from "../../../infrastructure/repositories/book_repository.js";;
import categoryRepository from "../../../infrastructure/repositories/categori_repository.js";

import "./AdminContent.css";

const AdminContent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getBookByIdUseCase = new GetBookByIdUseCase(bookRepository);
  const createBookUseCase = new CreateBookUseCase(bookRepository);
  const updateBookUseCase = new UpdateBookUseCase(bookRepository);
  const deleteBookUseCase = new DeleteBookUseCase(bookRepository);

  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);

  const generateId = () => crypto.randomUUID();

  const [formData, setFormData] = useState({
    name: "",
    authors: [{ id: "", name: "", slug: "" }],
    categories: { id: "", name: "", is_leaf: false },
    current_seller: { id: 1, price: "" },
    description: "",
    images: [{ base_url: "" }],
    list_price: "",
    original_price: "",
    rating_average: "",
    short_description: "",
    specifications: [{ name: "Thông tin chung", attributes: [] }],
  });

  const [categories, setCategories] = useState([]);

  // Load book detail nếu có id
  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const data = await getBookByIdUseCase.execute(id);

        setFormData({
          name: data.name ?? "",
          authors: data.authors?.length ? data.authors : [{ id: "", name: "", slug: "" }],
          categories: data.categories ?? { id: "", name: "", is_leaf: false },
          current_seller: data.current_seller ?? { id: 1, price: "" },
          description: data.description ?? "",
          images: data.images?.length ? data.images : [{ base_url: "" }],
          list_price: data.list_price ?? "",
          original_price: data.original_price ?? "",
          rating_average: data.rating_average ?? "",
          short_description: data.short_description ?? "",
          specifications:
            data.specifications?.length
              ? data.specifications
              : [{ name: "Thông tin chung", attributes: [] }],
        });
      } catch (error) {
        console.error("Load book detail error:", error);
      }
    })();
  }, [id]);

  // Load categories
  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCategoriesUseCase.execute();
        setCategories(data);
      } catch (error) {
        console.error("Load categories error:", error);
      }
    })();
  }, []);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Dropdown chọn danh mục
  const handleCategoryChange = (e) => {
    const cat = categories.find((x) => String(x.id) === e.target.value);
    setFormData({ ...formData, categories: cat });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      authors: formData.authors.map((a) => ({
        ...a,
        id: a.id || generateId(),
      })),
      categories: {
        ...formData.categories,
        id: formData.categories.id || generateId(),
      },
    };

    try {
      if (id) {
        await updateBookUseCase.execute(id, payload);
        alert("Cập nhật sản phẩm thành công!");
      } else {
        await createBookUseCase.execute(payload);
        alert("Thêm sách thành công!");
      }
      navigate("/admin");
    } catch (error) {
      console.error("Submit book error:", error);
    }
  };

  // Delete
  const handleDelete = async () => {
    if (!window.confirm("Bạn có muốn xóa sách này không?")) return;
    try {
      await deleteBookUseCase.execute(id);
      alert("Xóa sản phẩm thành công!");
      navigate("/admin");
    } catch (error) {
      console.error("Delete book error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}</h2>

      <form onSubmit={handleSubmit}>
        {/* Tên sách */}
        <div className="mb-3">
          <label className="form-label">Tên sách</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Tác giả */}
        <div className="mb-3">
          <label className="form-label">Tác giả</label>
          <input
            type="text"
            className="form-control"
            value={formData.authors[0].name}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                authors: [{ ...formData.authors[0], name: e.target.value }],
              })
            }
          />
        </div>

        {/* Giá bán */}
        <div className="mb-3">
          <label className="form-label">Giá bán</label>
          <input
            type="number"
            className="form-control"
            value={formData.current_seller.price}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                current_seller: {
                  ...formData.current_seller,
                  price: e.target.value,
                },
              })
            }
          />
        </div>

        {/* Giá gốc */}
        <div className="mb-3">
          <label className="form-label">Giá gốc</label>
          <input
            type="number"
            name="original_price"
            className="form-control"
            value={formData.original_price}
            required
            onChange={handleChange}
          />
        </div>

        {/* Danh mục */}
        <div className="mb-3">
          <label className="form-label">Danh mục</label>
          <select
            className="form-control"
            value={formData.categories.id}
            required
            onChange={handleCategoryChange}
          >
            <option value="">-- Chọn danh mục --</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* URL ảnh */}
        <div className="mb-3">
          <label className="form-label">URL Ảnh</label>
          <input
            type="text"
            className="form-control"
            value={formData.images[0].base_url}
            required
            onChange={(e) =>
              setFormData({
                ...formData,
                images: [{ base_url: e.target.value }],
              })
            }
          />
        </div>

        {/* Buttons */}
        <button className="btn btn-primary" type="submit">
          {id ? "Cập nhật" : "Thêm mới"}
        </button>

        {id && (
          <button className="btn btn-danger mx-3" type="button" onClick={handleDelete}>
            Xóa
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminContent;
