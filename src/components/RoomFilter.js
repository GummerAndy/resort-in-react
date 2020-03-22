import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
// Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  // Get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // Map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}
