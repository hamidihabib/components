import Alert from "@/components/alert";
import Button from "@/components/button";
import ButtonGroup from "@/components/buttonGroup";
import Icon from "@/components/icon";
import React from "react";

export default function Home() {
  return (
    <div>
      <ButtonGroup direction="row">
        <Button variant="contained" color="info">
          Button
          <Icon.ArrowRight />
        </Button>
        <Button variant="contained" color="info">
          Button
          <Icon.ArrowRight />
        </Button>
        <Button variant="contained" color="info">
          Button
          <Icon.ArrowRight />
        </Button>
      </ButtonGroup>
    </div>
  );
}
