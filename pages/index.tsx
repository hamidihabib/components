import Button from "@/components/button";
import Icon from "@/icons";
import React, { useState } from "react";

export default function Home() {
  return (
    <div>
      <Button color="error" rounded="rounded-full" variant="text">Button</Button>
      <Button color="error" rounded="rounded-full" variant="contained">Button</Button>
      <Button color="error" rounded="rounded-full" variant="outlined">Button</Button>
    </div>
  );
}
