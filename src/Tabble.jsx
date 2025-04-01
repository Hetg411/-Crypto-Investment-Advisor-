import "./Table.css"
export default function Table({content}){
        return (
        <>
        <table>
            <thead><tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
            </tr></thead>
            <tbody>
                <tr><td>1</td>
                <td> <img height="32px" width="32px" src="bitcoin.png" alt="" /> Bitcoin</td>
                <td>BTC</td>
                <td>{content.bitcoin.usd}</td></tr>

                <tr><td>2</td>
                <td> <img height="32px" width="32px" src="ethe.png" alt="" /> Ethereum</td>
                <td>ETH</td>
                <td>{content.ethereum.usd}</td></tr>

                <tr><td>3</td>
                <td> <img height="32px" width="32px" src="usdt.png" alt="" /> Tether</td>
                <td>USDT</td>
                <td>{content.tether.usd}</td></tr>

                <tr><td>4</td>
                <td> <img height="32px" width="32px" src="Doge.png" alt="" /> Dogecoin</td>
                <td>DOGE</td>
                <td>{content.dogecoin.usd}</td></tr>

                <tr><td>5</td>
                <td> <img height="32px" width="32px" src="gt.png" alt="" /> GateToken</td>
                <td>GT</td>
                <td>{content.gate.usd}</td></tr>

                <tr><td>6</td>
                <td> <img height="32px" width="32px" src="Cardano.png" alt="" /> Cardano</td>
                <td>ADA</td>
                <td>{content.cardano.usd}</td></tr>

                <tr><td>7</td>
                <td> <img height="32px" width="32px" src="Litecoin.png" alt="" /> LiteCoin</td>
                <td>LTC</td>
                <td>{content.litecoin.usd}</td></tr>

                <tr><td>8</td>
                <td> <img height="32px" width="32px" src="pepe.png" alt="" /> Pepe</td>
                <td>PEPE</td>
                <td>{content.pepe.usd}</td></tr>

                <tr><td>9</td>
                <td> <img height="32px" width="32px" src="Sonata.png" alt="" /> Solana</td>
                <td>SOL</td>
                <td>{content.solana.usd}</td></tr>

                <tr><td>10</td>
                <td> <img height="32px" width="32px" src="XRP_files\12379305(1).png" alt="" /> &nbsp;
                    Ripple</td>
                <td>XRP</td>
                <td>{content.ripple.usd}</td></tr>

               

            </tbody>
        </table>
        </>
    )
}