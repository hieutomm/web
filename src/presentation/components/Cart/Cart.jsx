// // src/presentation/components/Cart/Cart.jsx

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

// // Use Cases
// import GetCartUseCase from '../../../usecases/cart/get_cart_usecase';
// import UpdateCartItemUseCase from '../../../usecases/cart/update_cart_usecase';
// import RemoveCartItemUseCase from '../../../usecases/cart/remove_cart_usecase';
// import ClearCartUseCase from '../../../usecases/cart/clear_cart_usecase';

// // Repository
// import { cartRepository } from '../../../infrastructure/repositories/cart_repository';

// function Cart() {
//   const navigate = useNavigate();
//   const [cartData, setCartData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Use Cases
//   const getCartUseCase = new GetCartUseCase(cartRepository);
//   const updateCartItemUseCase = new UpdateCartItemUseCase(cartRepository);
//   const removeCartItemUseCase = new RemoveCartItemUseCase(cartRepository);
//   const clearCartUseCase = new ClearCartUseCase(cartRepository);

//   // Fetch cart data
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const fetchCart = async () => {
//     const token = localStorage.getItem('token');
    
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     try {
//       setLoading(true);
//       const data = await getCartUseCase.execute(token);
//       setCartData(data);
//     } catch (err) {
//       console.error('Error:', err);
//       if (err.message === 'UNAUTHORIZED') {
//         localStorage.removeItem('token');
//         navigate('/login');
//       } else {
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Update quantity
//   const handleUpdateQuantity = async (cartItemId, newQuantity) => {
//     if (newQuantity < 1) return;

//     const token = localStorage.getItem('token');
    
//     try {
//       await updateCartItemUseCase.execute(token, cartItemId, newQuantity);
      
//       // Update local state
//       setCartData(prev => ({
//         ...prev,
//         items: prev.items.map(item =>
//           item.cartItemId === cartItemId
//             ? { ...item, quantity: newQuantity }
//             : item
//         )
//       }));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Remove item
//   const handleRemoveItem = async (cartItemId) => {
//     if (!window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;

//     const token = localStorage.getItem('token');
    
//     try {
//       await removeCartItemUseCase.execute(token, cartItemId);
      
//       // Update local state
//       setCartData(prev => ({
//         ...prev,
//         items: prev.items.filter(item => item.cartItemId !== cartItemId)
//       }));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Clear cart
//   const handleClearCart = async () => {
//     if (!window.confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) return;

//     const token = localStorage.getItem('token');
    
//     try {
//       await clearCartUseCase.execute(token);
//       setCartData(prev => ({ ...prev, items: [] }));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   // Calculate totals
//   const subtotal = cartData?.items?.reduce((sum, item) => sum + (item.price * item.quantity), 0) || 0;
//   const shippingFee = subtotal > 0 ? 30000 : 0;
//   const total = subtotal + shippingFee;

//   // Checkout
//   const handleCheckout = () => {
//     if (!cartData?.items || cartData.items.length === 0) {
//       alert('Giỏ hàng trống!');
//       return;
//     }
//     navigate('/checkout');
//   };

//   if (loading) {
//     return (
//       <>
//         <Header />
//         <div className="container my-5">
//           <div className="text-center">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-3">Đang tải giỏ hàng...</p>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <Header />
//         <div className="container my-5">
//           <div className="alert alert-danger">{error}</div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   const cartItems = cartData?.items || [];

//   return (
//     <>
//       <Header />
//       <main className="container my-4">
//         <div className="d-flex justify-content-between align-items-center mb-4">
//           <h2>
//             <i className="bi bi-cart3 me-2"></i>
//             Giỏ hàng của bạn ({cartItems.length})
//           </h2>
          
//           {cartItems.length > 0 && (
//             <button 
//               className="btn btn-outline-danger btn-sm"
//               onClick={handleClearCart}
//             >
//               <i className="bi bi-trash me-1"></i>
//               Xóa tất cả
//             </button>
//           )}
//         </div>

//         {cartItems.length === 0 ? (
//           <div className="text-center py-5">
//             <i className="bi bi-cart-x" style={{ fontSize: '64px', color: '#ccc' }}></i>
//             <h4 className="mt-3">Giỏ hàng trống</h4>
//             <p className="text-muted">Hãy thêm sản phẩm vào giỏ hàng!</p>
//             <button 
//               className="btn btn-primary mt-3"
//               onClick={() => navigate('/')}
//             >
//               Tiếp tục mua sắm
//             </button>
//           </div>
//         ) : (
//           <div className="row">
//             {/* Cart Items */}
//             <div className="col-lg-8">
//               <div className="card">
//                 <div className="card-body">
//                   {cartItems.map((item) => (
//                     <div key={item.cartItemId} className="row mb-3 pb-3 border-bottom align-items-center">
//                       {/* Image */}
//                       <div className="col-md-2">
//                         <img
//                           src={item.bookImage || 'https://via.placeholder.com/100'}
//                           alt={item.bookName}
//                           className="img-fluid rounded"
//                           style={{ maxHeight: '120px', objectFit: 'cover', cursor: 'pointer' }}
//                           onClick={() => navigate(`/book/${item.bookId}`)}
//                         />
//                       </div>

//                       {/* Info */}
//                       <div className="col-md-4">
//                         <h6 
//                           className="mb-2" 
//                           style={{ cursor: 'pointer' }}
//                           onClick={() => navigate(`/book/${item.bookId}`)}
//                         >
//                           {item.bookName || 'Đang tải...'}
//                         </h6>
//                         <p className="text-muted small mb-1">
//                           Mã: {item.bookId}
//                         </p>
//                       </div>

//                       {/* Price */}
//                       <div className="col-md-2 text-center">
//                         <div className="fw-bold text-danger">
//                           {item.price.toLocaleString('vi-VN')}₫
//                         </div>
//                         {item.originalPrice && item.originalPrice > item.price && (
//                           <small className="text-decoration-line-through text-muted d-block">
//                             {item.originalPrice.toLocaleString('vi-VN')}₫
//                           </small>
//                         )}
//                       </div>

//                       {/* Quantity */}
//                       <div className="col-md-2">
//                         <div className="input-group input-group-sm">
//                           <button
//                             className="btn btn-outline-secondary"
//                             onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}
//                             disabled={item.quantity <= 1}
//                           >
//                             -
//                           </button>
//                           <input
//                             type="text"
//                             className="form-control text-center"
//                             value={item.quantity}
//                             readOnly
//                           />
//                           <button
//                             className="btn btn-outline-secondary"
//                             onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>

//                       {/* Total */}
//                       <div className="col-md-1 text-end">
//                         <div className="fw-bold text-danger">
//                           {(item.price * item.quantity).toLocaleString('vi-VN')}₫
//                         </div>
//                       </div>

//                       {/* Remove */}
//                       <div className="col-md-1 text-end">
//                         <button
//                           className="btn btn-sm btn-outline-danger"
//                           onClick={() => handleRemoveItem(item.cartItemId)}
//                           title="Xóa"
//                         >
//                           <i className="bi bi-trash"></i>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Continue Shopping */}
//               <button
//                 className="btn btn-outline-primary mt-3"
//                 onClick={() => navigate('/')}
//               >
//                 <i className="bi bi-arrow-left me-2"></i>
//                 Tiếp tục mua sắm
//               </button>
//             </div>

//             {/* Order Summary */}
//             <div className="col-lg-4">
//               <div className="card sticky-top" style={{ top: '20px' }}>
//                 <div className="card-header bg-white">
//                   <h5 className="mb-0">Thông tin đơn hàng</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Tạm tính:</span>
//                     <span>{subtotal.toLocaleString('vi-VN')}₫</span>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <span>Phí vận chuyển:</span>
//                     <span>{shippingFee.toLocaleString('vi-VN')}₫</span>
//                   </div>
//                   <hr />
//                   <div className="d-flex justify-content-between mb-3">
//                     <strong>Tổng cộng:</strong>
//                     <strong className="text-danger fs-5">
//                       {total.toLocaleString('vi-VN')}₫
//                     </strong>
//                   </div>

//                   <button
//                     className="btn btn-danger w-100 mb-2"
//                     onClick={handleCheckout}
//                   >
//                     Tiến hành thanh toán
//                   </button>

//                   <div className="alert alert-info small mb-0">
//                     <i className="bi bi-info-circle me-2"></i>
//                     Miễn phí vận chuyển cho đơn hàng từ 150.000₫
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default Cart;



// src/presentation/components/Cart/Cart.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Use Cases
import GetCartUseCase from '../../../usecases/cart/get_cart_usecase';
import UpdateCartItemUseCase from '../../../usecases/cart/update_cart_usecase';
import RemoveCartItemUseCase from '../../../usecases/cart/remove_cart_usecase';
import ClearCartUseCase from '../../../usecases/cart/clear_cart_usecase';

// Repository
import { cartRepository } from '../../../infrastructure/repositories/cart_repository';

function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use Cases
  const getCartUseCase = new GetCartUseCase(cartRepository);
  const updateCartItemUseCase = new UpdateCartItemUseCase(cartRepository);
  const removeCartItemUseCase = new RemoveCartItemUseCase(cartRepository);
  const clearCartUseCase = new ClearCartUseCase(cartRepository);

  // Fetch cart data
  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      setLoading(true);
      const data = await getCartUseCase.execute(token);
      setCartData(data);
    } catch (err) {
      console.error('Error:', err);
      if (err.message === 'UNAUTHORIZED') {
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // Update quantity
  const handleUpdateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;

    const token = localStorage.getItem('token');
    
    try {
      await updateCartItemUseCase.execute(token, cartItemId, newQuantity);
      
      // Update local state
      setCartData(prev => ({
        ...prev,
        items: prev.items.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: newQuantity }
            : item
        )
      }));
    } catch (err) {
      alert(err.message);
    }
  };

  // Remove item
  const handleRemoveItem = async (cartItemId) => {
    if (!window.confirm('Bạn có chắc muốn xóa sản phẩm này?')) return;

    const token = localStorage.getItem('token');
    
    try {
      await removeCartItemUseCase.execute(token, cartItemId);
      
      // Update local state
      setCartData(prev => ({
        ...prev,
        items: prev.items.filter(item => item.cartItemId !== cartItemId)
      }));
    } catch (err) {
      alert(err.message);
    }
  };

  // Clear cart
  const handleClearCart = async () => {
    if (!window.confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) return;

    const token = localStorage.getItem('token');
    
    try {
      await clearCartUseCase.execute(token);
      setCartData(prev => ({ ...prev, items: [] }));
    } catch (err) {
      alert(err.message);
    }
  };

  // Calculate totals
  const cartItems = cartData?.items || [];
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 0; // Có thể thêm logic giảm giá
  const shippingFee = subtotal >= 150000 ? 0 : 30000; // Miễn phí ship từ 150k
  const total = subtotal - discount + shippingFee;

  // Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Giỏ hàng trống!');
      return;
    }
    navigate('/checkout');
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="container my-5">
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Đang tải giỏ hàng...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container my-5">
          <div className="alert alert-danger d-flex align-items-center">
            <i className="bi bi-exclamation-triangle-fill me-3" style={{ fontSize: '24px' }}></i>
            <div>
              <strong>Lỗi!</strong> {error}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container my-4" style={{ minHeight: '60vh' }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
          <div>
            <h2 className="mb-1">
              <i className="bi bi-cart3 me-2 text-primary"></i>
              Giỏ hàng của bạn
            </h2>
            <p className="text-muted mb-0">
              <small>{cartItems.length} sản phẩm</small>
            </p>
          </div>
          
          {cartItems.length > 0 && (
            <button 
              className="btn btn-outline-danger"
              onClick={handleClearCart}
            >
              <i className="bi bi-trash me-2"></i>
              Xóa tất cả
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          // Empty cart
          <div className="text-center py-5">
            <div className="mb-4">
              <i className="bi bi-cart-x" style={{ fontSize: '80px', color: '#ddd' }}></i>
            </div>
            <h4 className="mb-3">Giỏ hàng trống</h4>
            <p className="text-muted mb-4">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <button 
              className="btn btn-primary btn-lg px-5"
              onClick={() => navigate('/')}
            >
              <i className="bi bi-shop me-2"></i>
              Mua sắm ngay
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                  {cartItems.map((item, index) => (
                    <div 
                      key={item.cartItemId} 
                      className={`p-3 ${index !== cartItems.length - 1 ? 'border-bottom' : ''}`}
                    >
                      <div className="row align-items-center g-3">
                        {/* Image */}
                        <div className="col-auto">
                          <div 
                            style={{ 
                              width: '100px', 
                              height: '140px', 
                              overflow: 'hidden',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                            }}
                            onClick={() => navigate(`/book/${item.bookId}`)}
                          >
                            <img
                              src={item.bookImage || 'https://via.placeholder.com/100x140?text=No+Image'}
                              alt={item.bookName}
                              style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover'
                              }}
                            />
                          </div>
                        </div>

                        {/* Info */}
                        <div className="col">
                          <h6 
                            className="mb-2 fw-bold" 
                            style={{ 
                              cursor: 'pointer',
                              color: '#333'
                            }}
                            onClick={() => navigate(`/book/${item.bookId}`)}
                          >
                            {item.bookName || 'Đang tải...'}
                          </h6>
                          <p className="text-muted small mb-2">
                            Mã sản phẩm: {item.bookId}
                          </p>
                          
                          {/* Price */}
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <span className="text-danger fw-bold fs-5">
                              {item.price.toLocaleString('vi-VN')}₫
                            </span>
                            {item.originalPrice && item.originalPrice > item.price && (
                              <>
                                <span className="text-decoration-line-through text-muted small">
                                  {item.originalPrice.toLocaleString('vi-VN')}₫
                                </span>
                                <span className="badge bg-danger">
                                  -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                                </span>
                              </>
                            )}
                          </div>

                          {/* Quantity & Actions */}
                          <div className="d-flex align-items-center gap-3">
                            {/* Quantity */}
                            <div className="d-flex align-items-center border rounded">
                              <button
                                className="btn btn-sm"
                                onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                style={{ width: '36px', height: '36px' }}
                              >
                                <i className="bi bi-dash"></i>
                              </button>
                              <input
                                type="text"
                                className="form-control border-0 text-center"
                                value={item.quantity}
                                readOnly
                                style={{ width: '50px' }}
                              />
                              <button
                                className="btn btn-sm"
                                onClick={() => handleUpdateQuantity(item.cartItemId, item.quantity + 1)}
                                style={{ width: '36px', height: '36px' }}
                              >
                                <i className="bi bi-plus"></i>
                              </button>
                            </div>

                            {/* Total */}
                            <div className="ms-auto">
                              <div className="text-end">
                                <small className="text-muted d-block">Tổng:</small>
                                <strong className="text-danger fs-5">
                                  {(item.price * item.quantity).toLocaleString('vi-VN')}₫
                                </strong>
                              </div>
                            </div>

                            {/* Remove */}
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => handleRemoveItem(item.cartItemId)}
                              title="Xóa sản phẩm"
                              style={{ width: '36px', height: '36px' }}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <button
                className="btn btn-outline-primary mt-3"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Tiếp tục mua sắm
              </button>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0">Thông tin đơn hàng</h5>
                </div>
                <div className="card-body">
                  {/* Price breakdown */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Tạm tính ({cartItems.length} sản phẩm):</span>
                      <span className="fw-semibold">{subtotal.toLocaleString('vi-VN')}₫</span>
                    </div>
                    
                    {discount > 0 && (
                      <div className="d-flex justify-content-between mb-2 text-success">
                        <span>Giảm giá:</span>
                        <span>-{discount.toLocaleString('vi-VN')}₫</span>
                      </div>
                    )}
                    
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Phí vận chuyển:</span>
                      <span className={shippingFee === 0 ? 'text-success fw-semibold' : ''}>
                        {shippingFee === 0 ? 'Miễn phí' : shippingFee.toLocaleString('vi-VN') + '₫'}
                      </span>
                    </div>
                  </div>

                  <hr />

                  {/* Total */}
                  <div className="d-flex justify-content-between mb-4">
                    <strong className="fs-5">Tổng cộng:</strong>
                    <strong className="text-danger fs-4">
                      {total.toLocaleString('vi-VN')}₫
                    </strong>
                  </div>

                  {/* Checkout button */}
                  <button
                    className="btn btn-danger w-100 py-3 mb-3"
                    onClick={handleCheckout}
                  >
                    <i className="bi bi-credit-card me-2"></i>
                    Tiến hành thanh toán
                  </button>

                  {/* Info */}
                  <div className="alert alert-info mb-0 small">
                    <i className="bi bi-info-circle me-2"></i>
                    {subtotal >= 150000 
                      ? '🎉 Bạn được miễn phí vận chuyển!'
                      : `Mua thêm ${(150000 - subtotal).toLocaleString('vi-VN')}₫ để được miễn phí vận chuyển`
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Cart;