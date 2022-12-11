import {useState} from "react";
import ExchangeRate from './Exchangerate'


const Currencyconverter = () => {
     const currencies =['BTC','ETH','USD','XRP','LTC','ADA']  
     const [chosenPrimarycurrency , SetPrimarycurrency] = useState('BTC')

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input type="number"
                                    name="currency-amount-1"
                                    value={""} />
                            </td>
                            <td>
                                <select
                                    value={"chosenPrimarycurrency"} 
                                    name="currency-amount-1"
                                    className="currency-options">
                                        onChange={(e) => setchosenPrimarycurrency (e.target.value)}
                                  {currencies.map((currency, _index) =>  (<option key = {_index}>{currency}</option>))}

                                </select>
                            </td>

                        </tr>

                        <tr>
                            <td>Secondary Currency:</td>
                            <td>
                                <input type="text"
                                    name="currency-amount-2"
                                    value={""} />
                            </td>
                            <td>
                                <select
                                    value={""}
                                    name="currency-amount-2"
                                    className="currency-options">
                                 {currencies.map((currency, _index) =>  (<option key = {_index}>{currency}</option>))}

                                </select>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

            <ExchangeRate />
        </div>
    );
}

export default Currencyconverter;
























