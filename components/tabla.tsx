import Carta from "./carta";

type TablaProps = {
  isLoading: boolean;
  randomNumberArray: Array<number> | undefined;
};

export default function Tabla({ isLoading, randomNumberArray }: TablaProps) {
  return (
    <>
      <div
        className={`flex flex-col drop-shadow-2xl md:py-0 ${
          isLoading ? "invisible h-0 w-0 overflow-hidden" : "visible h-full w-full md:w-[460px]"
        }`}
      >
        <div className="flex flex-row items-end bg-white px-2 pt-4 md:pt-1 flex justify-between">
          <p className="font-bold font-lora">LOTERIA</p>
          <img
              className="h-8 pb-1"
              src="/images/don-clemente-logo.png"
              alt=""
            />
          <p className="font-bold font-lora">TABLA</p>
        </div>
        <div className="grid grid-cols-4 grid-rows-4 gap-2 bg-white pb-12 md:pb-2 px-2">
          <>
            {randomNumberArray?.map((num, i) => (
              <div
                key={`div-${i}`}
                className="hover:cursor-pointer relative"
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
