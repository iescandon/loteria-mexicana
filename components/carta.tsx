import { useState, useEffect } from "react";
import { generateRandomNumber } from "../utils/index";

type CartaProps = {
  cardNum: number | undefined;
  clickable?: boolean;
};

export default function Carta({ cardNum, clickable }: CartaProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [beanNum, setBeanNum] = useState<number>(1);

  useEffect(() => {
    if (clickable) {
      const num: number = generateRandomNumber(13);
      setBeanNum(num);
    }
  }, []);

  return (
    <>
      <img
        className="h-full w-full border border-1 border-black"
        key={`card-${cardNum}`}
        src={`/images/cards/${cardNum}.png`}
        alt="loteria card"
        onClick={() => {
          const click: boolean = !isSelected;
          setIsSelected(click);
        }}
      />
      {clickable && (
        <div className={`${isSelected ? "visible" : "invisible"}`}>
          <img
            className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-16 w-16 drop-shadow-xl"
            key={`bean-${beanNum}`}
            src={`/images/beans/${beanNum}.png`}
            alt="bean"
            onClick={() => {
              const click: boolean = !isSelected;
              setIsSelected(click);
            }}
          />
          <button
            className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 z-0 h-full w-full bg-black opacity-50"
            onClick={() => {
              const click: boolean = !isSelected;
              setIsSelected(click);
            }}
          ></button>
        </div>
      )}
    </>
  );
}
