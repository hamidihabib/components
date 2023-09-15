import ButtonOutlined from "@/components/button/outlined";
import Icon from "@/icons";
import React, { useState } from "react";

export default function Home() {
  const [Test, setTest] = useState(false);
  setTimeout(() => {
    setTest(!Test);
  }, 1000);
  return (
    <div>
      <ButtonOutlined>
        Test
      </ButtonOutlined>
    </div>
  );
}
