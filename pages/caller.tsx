import Carta from "@/components/carta";
import { useState, useEffect } from "react";
import Nav from "@/components/nav";

export default function Caller() {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const [cardNum, setCardNum] = useState<number | undefined>(undefined);
  const [shuffledCardsArray, setShuffledCardsArray] = useState<Array<number>>(
    []
  );
  const [discardedCardsArray, setDiscardedCardsArray] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    createAndShuffleDeck();
  }, []);

  const createAndShuffleDeck = () => {
    let tempDeck: Array<number> = [];
    for (let i = 1; i < 55; i++) {
      tempDeck.push(i);
    }
    for (let i = tempDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = tempDeck[i];
      tempDeck[i] = tempDeck[j];
      tempDeck[j] = temp;
    }
    setShuffledCardsArray(tempDeck);
  };

  const getNewCard = () => {
    //remove first card and put the rest back into remaining shuffled cards
    const tempArray: Array<number> = [...shuffledCardsArray];
    const oldCard = tempArray.splice(0, 1);
    setShuffledCardsArray(tempArray);

    // move old card to discarded pile
    const discardedTempArray: Array<number> = [
      ...discardedCardsArray,
      oldCard[0],
    ];
    setDiscardedCardsArray(discardedTempArray);

    //check if there are any cards left, end game
    if (tempArray.length === 0) {
      setHasEnded(true);
    }

    // set newcard num
    const nextNum = tempArray[0];
    setCardNum(nextNum);
  };

  return (
    <>
      {!hasStarted ? (
        <>
          <section className="flex flex-row h-screen md:min-h-screen items-center justify-center p-6">
            <button
              className="bg-[#e81e25] text-2xl font-lora font-bold px-3 py-2 outline outline-2"
              onClick={() => {
                const firstNum = shuffledCardsArray[0];
                setCardNum(firstNum);
                setHasStarted(true);
              }}
            >
            START
            </button>
          </section>
        </>
      ) : (
        <>
        <Nav />
        <section className="p-4 md:pt-8 md:pb-12 md:px-10">
          {!hasEnded && (
            <>
              <div className="flex flex-row justify-center">
                <div className="w-[205px] h-[300px] p-5 bg-white shadow-md rounded-xl">
                  <Carta cardNum={cardNum} clickable={false} />
                </div>
              </div>
              <div className="flex flex-row justify-center items-center pt-3 pb-8">
                <button
                  id="nextBtn"
                  className="bg-[#07adee] border border-2 border-black text-3xl w-[50px] h-[40px] rounded-full"
                  onClick={() => {
                    getNewCard();
                  }}
                >
                  <span className="font-[900]">&#8594;</span>
                </button>
              </div>
            </>
          )}
          <div className="flex flex-row flex-wrap justify-center w-full">
            <>
              {discardedCardsArray?.map((num, i) => (
                <div
                  key={`div-${i}`}
                  className="w-[135px] h-[198px] p-3 bg-white mx-1 mb-2 shadow-2xl rounded-md"
                >
                  <Carta key={i} cardNum={num} />
                </div>
              ))}
            </>
          </div>
        </section>
        </>
      )}
    </>
  );
}
