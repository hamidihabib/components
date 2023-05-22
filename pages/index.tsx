import Button from "@/components/button";
import Icon from "@/components/icon";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button  onClick={()=>alert("ok")}  href="/components" color="danger" variant="text">
        button <Icon.ArrowRight/>
      </Button>
      <Button color="danger" variant="outlined">
        button
      </Button>
      <Button color="danger" variant="text">
        button
      </Button>
    </div>
  );
}
