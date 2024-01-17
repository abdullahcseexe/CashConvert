import { useState } from "react";
import useCurrency from "./hooks/useCurrency";
import { FaLinkedin } from "react-icons/fa";
import "./App.css";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("eur");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyData = useCurrency(from);
  // console.log(currencyData)

  const options = Object.keys(currencyData);
  // console.log(options)

  const swapping = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
  };
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
                currencyDisable={true}
              />
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(convertedAmount) =>
                  setConvertedAmount(convertedAmount)
                }
                selectCurrency={to}
                amountDisable={true}
                currencyDisable={true}
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700  text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
              <button
                type="button"
                className="w-full bg-blue-600 hover:bg-blue-700  text-white px-4 py-3 rounded-lg"
                onClick={swapping}
              >
                Swap
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white/30 max-w-md mx-auto my-2 rounded-lg py-1 px-3 flex justify-center items-center">
          <p className="font-serif text-sm text-gray-700 text-center">
            Created By Abdul Adil
            <a
              href="https://www.linkedin.com/in/abdul-adil-6abb12246/"
              className="flex justify-center"
            >
              <FaLinkedin icon={FaLinkedin} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
