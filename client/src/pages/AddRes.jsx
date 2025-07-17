import React, { useState } from "react";

// AddRes component สำหรับเพิ่มร้านอาหาร
const AddRes = () => {
  // state สำหรับเก็บข้อมูลร้านอาหารใหม่
  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  // handleChange อัปเดต state เมื่อกรอกข้อมูล
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  // handleSubmit ส่งข้อมูลไป API (POST)
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3001/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurant),
      });
      if (response.ok) {
        alert("Restaurant added successfully");
        setRestaurant({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto pb-7">
      {/* ฟอร์มเพิ่มร้านอาหาร */}
      <form className="max-w-sm mx-auto mt-10 rounded-2xl shadow-lg ">
        <div className="text-center items-center space-y-8 m-10 p-10  ">
          <ul className="text-center items-center space-y-8">
            <li>
              <label className="text-4xl">added form</label>
            </li>
            <li>
              <label>Title</label>
              <br />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                value={restaurant.title}
              ></input>
            </li>
            <li>
              <label>Type</label>
              <br />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="type"
                placeholder="Type"
                onChange={handleChange}
                value={restaurant.type}
              ></input>
            </li>
            <li>
              <label>Upload Image</label>
              <br />
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="img"
                placeholder="Image"
                onChange={handleChange}
                value={restaurant.img}
              ></input>
              {/* แสดง preview รูป */}
              {restaurant && (
                <div className="flex items-center gap-3 m-5 ">
                  {restaurant.img && (
                    <img
                      className="rounded-2xl"
                      src={restaurant.img}
                      alt="preview"
                    ></img>
                  )}
                </div>
              )}
            </li>
          </ul>
          <div className="m-5 space-x-3.5">
            {/* ปุ่ม OK */}
            <button className="btn btn-soft btn-primary" onClick={handleSubmit}>
              OK
            </button>
            {/* ปุ่ม Cancel */}
            <button className="btn btn-soft btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRes;
