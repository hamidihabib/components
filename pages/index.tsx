import Button from "@/components/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button variant="outlined">Button</Button>
      <Button variant="text">Button</Button>
      <Button href="/test" variant="contained">Button</Button>
    </div>
  );
}
