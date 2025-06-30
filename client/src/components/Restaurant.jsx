import React from "react";
import Card from "./Card";

// รับ props restaurants (array)
const Restaurant = ({ restaurants }) => {
  // log ข้อมูลร้านอาหาร (debug)
  console.log(restaurants);
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4">
        {/* วนลูปแสดง Card */}
        {restaurants &&
          restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.title}
              type={restaurant.type}
              img={restaurant.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Restaurant;
