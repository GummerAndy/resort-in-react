import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomContainer() {
  return (
    <div>
      Hello from RoomContainer
      <RoomFilter />
      <RoomList />
    </div>
  );
}
