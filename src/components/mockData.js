const mockData = [
    {
      id: 1,
      name: "Bitcoin",
      creator: "Satoshi Nakamoto",
      progress: 95,
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      description:
        "Bitcoin is the first decentralized digital currency, enabling peer-to-peer transactions on a secure blockchain.",
      symbol: "BTC",
      marketCap: "1.2T",
      price: "30,000 USD",
      holderDistribution: {
        whales: "50%",
        investors: "30%",
        retail: "20%",
      },
      contractAddress: "N/A",
    },
    {
      id: 2,
      name: "Ethereum",
      creator: "Vitalik Buterin",
      progress: 88,
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      description:
        "Ethereum is a decentralized platform that supports smart contracts and decentralized applications (dApps).",
      symbol: "ETH",
      marketCap: "500B",
      price: "2,000 USD",
      holderDistribution: {
        whales: "40%",
        investors: "35%",
        retail: "25%",
      },
      contractAddress: "N/A",
    },
    {
      id: 3,
      name: "Cardano",
      creator: "Charles Hoskinson",
      progress: 72,
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
      description:
        "Cardano is a blockchain platform focused on sustainability, scalability, and interoperability.",
      symbol: "ADA",
      marketCap: "70B",
      price: "1 USD",
      holderDistribution: {
        whales: "45%",
        investors: "40%",
        retail: "15%",
      },
      contractAddress: "N/A",
    },
    {
      id: 5,
      name: "Binance Coin",
      creator: "Binance Team",
      progress: 90,
      image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      description:
        "Binance Coin powers the Binance ecosystem, offering utility for transactions and services on the platform.",
      symbol: "BNB",
      marketCap: "100B",
      price: "400 USD",
      holderDistribution: {
        whales: "35%",
        investors: "40%",
        retail: "25%",
      },
      contractAddress: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    },
    {
      id: 6,
      name: "Solana",
      creator: "Anatoly Yakovenko",
      progress: 78,
      image: "https://cryptologos.cc/logos/solana-sol-logo.png",
      description:
        "Solana is a high-performance blockchain supporting scalable decentralized applications and crypto projects.",
      symbol: "SOL",
      marketCap: "60B",
      price: "50 USD",
      holderDistribution: {
        whales: "42%",
        investors: "38%",
        retail: "20%",
      },
      contractAddress: "N/A",
    },
    {
      id: 7,
      name: "Ripple",
      creator: "Chris Larsen",
      progress: 83,
      image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
      description:
        "Ripple is a digital payment protocol for fast, low-cost cross-border money transfers.",
      symbol: "XRP",
      marketCap: "60B",
      price: "1 USD",
      holderDistribution: {
        whales: "48%",
        investors: "32%",
        retail: "20%",
      },
      contractAddress: "N/A",
    },
    {
      id: 8,
      name: "Dogecoin",
      creator: "Billy Markus & Jackson Palmer",
      progress: 67,
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      description:
        "Dogecoin started as a meme cryptocurrency but has gained popularity for tipping and charity donations.",
      symbol: "DOGE",
      marketCap: "40B",
      price: "0.2 USD",
      holderDistribution: {
        whales: "30%",
        investors: "50%",
        retail: "20%",
      },
      contractAddress: "N/A",
    },
    {
      id: 9,
      name: "Shiba Inu",
      creator: "Ryoshi",
      progress: 55,
      image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      description:
        "Shiba Inu is a meme-based cryptocurrency that aims to become an Ethereum-based alternative to Dogecoin.",
      symbol: "SHIB",
      marketCap: "30B",
      price: "0.00001 USD",
      holderDistribution: {
        whales: "20%",
        investors: "50%",
        retail: "30%",
      },
      contractAddress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    },
    {
      id: 10,
      name: "Litecoin",
      creator: "Charlie Lee",
      progress: 80,
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
      description:
        "Litecoin is a peer-to-peer cryptocurrency designed to enable fast and low-cost payments globally.",
      symbol: "LTC",
      marketCap: "15B",
      price: "200 USD",
      holderDistribution: {
        whales: "38%",
        investors: "40%",
        retail: "22%",
      },
      contractAddress: "N/A",
    },
    // Add similar details for other coins...
  ];
  
  export default mockData;
  