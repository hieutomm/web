
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { SearchResultsList } from "./SearchResultsList";
import "./Header.css";

function Header() {
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0); // ✅ THÊM DÒNG NÀY

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    const update = () => setUser(JSON.parse(localStorage.getItem("user")));
    window.addEventListener("userUpdated", update);

    return () => window.removeEventListener("userUpdated", update);
  }, []);

  // ✅ THÊM useEffect NÀY để fetch cart count
  useEffect(() => {
    const fetchCartCount = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setCartCount(0);
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const count = data.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
          setCartCount(count);
        }
      } catch (err) {
        console.error("Failed to fetch cart count:", err);
      }
    };

    fetchCartCount();

    // Listen for cart updates
    const handleCartUpdate = () => fetchCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [user]);

  return (
    <header className="header-root">
      <nav className="header-nav">
        {/* LOGO */}
        <Link to="/" className="header-logo">
          <img src="/book-svgrepo-com.svg" alt="logo" />
        </Link>

        {/* SEARCH */}
        <div className="header-search">
          <Search setResults={setResults} />
          {results.length > 0 && <SearchResultsList results={results} />}
        </div>

        {/* ACTIONS */}
        <div className="header-actions">
          {/* Home */}
          <Link to="/" className="header-btn">
            <img src="/home-svgrepo-com.svg" alt="" />
            <span>Trang chủ</span>
          </Link>

          {/* User */}
          {user ? (
            <div className="header-user">
              <img src="/user-svgrepo-com.svg" alt="" />
              <span>{user.username}</span>

              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("user");
                  localStorage.removeItem("token");
                  localStorage.removeItem("refresh_token");
                  localStorage.removeItem("userId");

                  setUser(null);
                  setCartCount(0);
                  window.dispatchEvent(new Event("userUpdated"));
                }}
              >
                <img src="/logout-svgrepo-com.svg" alt="logout" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="header-btn">
              <img src="/user-svgrepo-com.svg" alt="" />
              <span>Đăng nhập</span>
            </Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="header-cart">
            <img
              src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
              alt="Cart"
            />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;