import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import './Button.css'

export default function App() {
  const [itemCount, setItemCount] = React.useState(1);

  return (
    <div style={{ display: "block", padding: 30 }}>
      <h4>?</h4>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
