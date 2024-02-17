import { FC } from "react";

interface IProps {
  flower: {
    color: string;
    name: string;
    family: string;
    price: number;
  };
}

const FlowerCard: FC<IProps> = ({ flower }) => {
  return (
    <div style={{backgroundColor: flower.color}}>
      <h1>{flower.name}</h1>
      <p>{flower.name}</p>
      <p>{flower.family}</p>
    </div>
  );
};

export default FlowerCard;
