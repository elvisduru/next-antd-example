import { Button, DatePicker } from "antd";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Button type="primary">Click me</Button>
      <DatePicker />
    </div>
  );
}
