const Restaurant = require("../models/restaurant.model.js")
const restaurantController = {};
//Create and save a new restaurant
restaurantController.create = async (req, res) => {
    const { name, type, imageUrl } = req.body;
    //validate data
    if (!name || !type || !imageUrl) {
        res.status(400).send({ massage: "Name, Type or ImageUrl can't be empty!" });
        return;
    }
    await Restaurant.findOne({ where: { name } }).then((restaurant) => {
    if (restaurant) {
        res.status(400).send({ massage: "Restaurant already exists!" });
    }
    const newRestaurant = {
        name,
        type,
        imageUrl
    }

    Restaurant.create(newRestaurant).then((data) => {
        res.send(data);
    }).catch((error) => {
        res.status(500).send({ massage: error.massage || "Something error while creating a restaurant" })
    })
})
};



module.exports = restaurantController;

// รับข้อมูลร้านอาหารจาก body
// ตรวจสอบว่าข้อมูลครบไหม
// เช็คว่ามีชื่อร้านนี้ในฐานข้อมูลหรือยัง
// ถ้ายังไม่มี สร้างใหม่และส่งกลับ
// ข้อควรระวัง:
// ถ้า restaurant มีอยู่แล้ว จะไม่ return หลังส่ง error ทำให้โค้ดยังรันต่อ (ควร return หลัง res.status)
// ใช้ async/await กับ then/catch ปนกัน อาจทำให้ debug ยาก