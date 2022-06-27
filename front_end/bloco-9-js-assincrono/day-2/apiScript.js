const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try{
    const response = await fetch(url)
    const data = await response.json()
    const coins = data.data;
    return coins;
  } catch(error) {
    console.log(error.message);
  }
  
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('crypto-list');

  coins
  .filter((coin) => coin.rank <= 10)
  .forEach((coin) => {
    const newLi = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

    coinsList.appendChild(newLi);
  });
}

window.onload = () => setCoins();