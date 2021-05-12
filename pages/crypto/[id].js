import styles from "./id.module.css"


const Details = ({ crypto}) => {
    return ( 
        <div className={styles.crypto_container}>
            <div className={styles.crypto_details}>
                <h1 className={styles.crypto_h1}>{crypto.name}</h1>
              
            </div>
        </div>
     );
}
 
export default Details;


export const getServerSideProps = async (context) => {

    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.json();

    return {
        props : {
            crypto : data
        }
    }
}