// นำเข้า createBrowserRouter สำหรับสร้าง router
import { createBrowserRouter } from "react-router";
// นำเข้าแต่ละหน้า
import AddRes from "../pages/AddRes";
import Home from "../Pages/Home";
import Update from "../pages/Update";

// กำหนดเส้นทางแต่ละหน้า
const router = createBrowserRouter([
  {
    path:"/", // หน้าแรก
    element:<Home/>
  },
  {
    path:"/add", // หน้าเพิ่มร้าน
    element:<AddRes/>
  },
  {
    path:"/update/:id", // หน้าแก้ไขร้าน
    element:<Update/>
  },
])

export default router