import styles from './crypto.module.css'
import Link from 'next/link'

const Crypto = ({ name, key, id, price, symbol, total, volume, image, market_cap, price_change }) => {
  
    return (
        <Link href={'/crypto/' + id } key={id} >
            <div className={styles.crypto_container}>
                <div className={styles.crypto_row}>
                    <div className={styles.crypto}>
                        <img src={image} alt={name} className={styles.crypto_image}/>
                        <h1 className={styles.crypto_h1}>{name}</h1>
                        <p className={styles.crypto_symbol}>{symbol}</p>
                    </div>
                    <div className={styles.crypto_data}>
                        <p className={styles.crypto_price}>${price}</p>
                        <p className={styles.crypto_total}>{total.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD'   // With currency, the currency code is also required
                        })}</p>
                        {price_change < 0 ? ( 
                                <p className={styles.crypto_percent, styles.red}>{price_change.toFixed(3)}%</p> 
                            ) : (
                                <p className={styles.crypto_percent, styles.green}>{price_change.toFixed(3)}%</p> 
                            )
                        }
                        <p className={styles.crypto_marketcap}>mkt cap: {market_cap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
     
}
 
export default Crypto;