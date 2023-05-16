import Carta from "./carta";

type TablaProps = {
  isLoading: boolean;
  randomNumberArray: Array<number> | undefined;
};

export default function Tabla({ isLoading, randomNumberArray }: TablaProps) {
  return (
    <>
      <div
        className={`flex flex-col drop-shadow-2xl ${
          isLoading ? "invisible h-0 w-0 overflow-hidden" : "visible"
        }`}
      >
        <div className="bg-white px-2 pt-1 flex justify-between">
          <p className="font-bold font-lora">LOTERIA</p>
          <img
              className="h-6 pb-1"
              src="/images/don-clemente-logo.png"
              alt=""
            />
          <p className="font-bold font-lora">TABLA</p>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 bg-white pb-2 px-2">
          <>
            {randomNumberArray?.map((num, i) => (
              <div
                key={`div-${i}`}
                className="hover:cursor-pointer h-[165px]"
              >
                <Carta key={i} cardNum={num} clickable={true} />
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
}
