
function InputBox({
  label,
  amount, // showing the amount
  onAmountChange, //
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "inr",
  amountDisable = false, //can ignore
  currencyDisable=false
}) {
 

  return (
      <div className="bg-white p-4 rounded-lg text-sm flex">
          <div className="w-1/2">
              <label  className="text-black mb-2 flex text-left">
                  {label}
              </label>
              <input
                  className="w-full py-1.5 px-2 rounded-lg bg-slate-300 text-black"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="flex flex-wrap justify-end text-right">
              <p className="text-black mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-no-drop"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))}
                  disabled={currencyDisable}
              >
                  
              {currencyOption.map((currency) => (
                <option key={currency} value={currency}>
                {currency}
                </option>
            ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
