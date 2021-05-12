import Crypto from './Crypto'

export default function CryptoList({cryptos}) {
    return (
        <>
            {cryptos.map((crypto) => {
                return (
                    <Crypto 
                        key = {crypto.id}
                        name = {crypto.name}
                        id = {crypto.id}
                        image = {crypto.image}
                        symbol = {crypto.symbol}
                        price = {crypto.current_price}
                        total = {crypto.total_volume}
                        market_cap = {crypto.market_cap}
                        price_change = {crypto.price_change_24h}
                    /> 
                )
            })}  
        </>
    )
  }