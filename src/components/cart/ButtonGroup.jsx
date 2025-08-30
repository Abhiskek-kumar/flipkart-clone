import { useState } from "react";
import styled from "@emotion/styled";
import { Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledButton = styled(Button)`
  border: 1px solid black;
  color: black;
  min-width: 40px;
 
  font-weight: bold;
`;

const CountBox = styled(Box)`
  min-width: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

const ButtonGroup = ({itemId}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    if(count > 1) {
      const newCount = count -1 ;
      setCount(newCount);
      dispatch(updateCart({id:itemId,quantity:newCount}))
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount);
    dispatch(updateCart({id: itemId, quantity: newCount }))
  };

  return (
    <Component>
      <StyledButton onClick={handleDecrement}>−</StyledButton>
      <CountBox>{count}</CountBox>
      <StyledButton onClick={handleIncrement}>+</StyledButton>
    </Component>
  );
};

export default ButtonGroup;
