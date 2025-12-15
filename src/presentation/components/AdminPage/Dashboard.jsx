import { useState, useEffect } from "react";

const Dashboard = () => {
  // Mock data (giả lập API)
  const mockStats = {
    books: 128,
    categories: 12,
    users: 54,
    orders: 37,
    soldToday: 18,
    revenueToday: 3250000,
  };

  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Giả lập call API
    setTimeout(() => {
      setStats(mockStats);
    }, 500);
  }, []);

  if (!stats) return <p>Đang tải dữ liệu...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="mb-6">Thống kê chung về hệ thống</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <Card title="Tổng số sách" value={stats.books} />
        <Card title="Danh mục" value={stats.categories} />
        <Card title="Người dùng" value={stats.users} />
        <Card title="Đơn hàng đang chờ" value={stats.orders} />
        <Card title="Số sách bán hôm nay" value={stats.soldToday} />
        <Card title="Doanh thu hôm nay" value={stats.revenueToday.toLocaleString() + "₫"} />

      </div>
    </div>
  );
};

// Component Card tái sử dụng
const Card = ({ title, value }) => (
  <div className="bg-white shadow rounded p-4">
    <p className="text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default Dashboard;
