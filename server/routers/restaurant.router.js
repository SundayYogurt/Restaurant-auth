const restaurantController = require("../controllers/restaurant.controller.js");

const express = require("express");
const router = express.Router();

//POST http://localhost:3000/api/v1/restaurant
router.post("/",restaurantController.create);

//GET http://localhost:3000/api/v1/restaurant
router.get("/",restaurantController.getAll);

//GET BY ID http://localhost:3000/api/v1/restaurant/:id
router.get("/:id",restaurantController.getById);

//GET BY ID http://localhost:3000/api/v1/restaurant/:id
router.put("/:id",restaurantController.updateById);

//DELETE BY ID http://localhost:3000/api/v1/restaurant/:id
router.delete("/:id",restaurantController.deleteById);


module.exports = router

//สร้าง router สำหรับ restaurant
//รับ POST เพื่อสร้างร้านอาหารใหม่ โดยส่งต่อไปที่ controller