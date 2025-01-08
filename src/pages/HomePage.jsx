import React from "react";
import HeroSection from "../components/HeroSection";
import SearchFilter from "../components/SearchFilter";
import LaunchCard from "../components/LaunchCard";
import mockData from "../components/mockData";

// const mockData = [
//   { id: 1, name: "Coin Name 1", creator: "Creator 1", progress: 75 },
//   { id: 2, name: "Coin Name 2", creator: "Creator 2", progress: 60 },
//   { id: 3, name: "Coin Name 3", creator: "Creator 3", progress: 90 },
//   { id: 1, name: "Coin Name 1", creator: "Creator 1", progress: 75 },
//   { id: 2, name: "Coin Name 2", creator: "Creator 2", progress: 60 },
//   { id: 3, name: "Coin Name 3", creator: "Creator 3", progress: 90 },
//   { id: 1, name: "Coin Name 1", creator: "Creator 1", progress: 75 },
//   { id: 2, name: "Coin Name 2", creator: "Creator 2", progress: 60 },
//   { id: 3, name: "Coin Name 3", creator: "Creator 3", progress: 90 },
//   { id: 1, name: "Coin Name 1", creator: "Creator 1", progress: 75 },
//   { id: 2, name: "Coin Name 2", creator: "Creator 2", progress: 60 },
//   { id: 3, name: "Coin Name 3", creator: "Creator 3", progress: 90 },
//   { id: 1, name: "Coin Name 1", creator: "Creator 1", progress: 75 },
//   { id: 2, name: "Coin Name 2", creator: "Creator 2", progress: 60 },
//   { id: 3, name: "Coin Name 3", creator: "Creator 3", progress: 90 },
//   // Add more mock data as needed
// ];

// const mockData = [
//   { id: 1, name: "Bitcoin", creator: "Satoshi Nakamoto", progress: 95 },
//   { id: 2, name: "Ethereum", creator: "Vitalik Buterin", progress: 88 },
//   { id: 3, name: "Cardano", creator: "Charles Hoskinson", progress: 72 },
//   { id: 4, name: "Polkadot", creator: "Gavin Wood", progress: 85 },
//   { id: 5, name: "Binance Coin", creator: "Binance Team", progress: 90 },
//   { id: 6, name: "Solana", creator: "Anatoly Yakovenko", progress: 78 },
//   { id: 7, name: "Ripple", creator: "Chris Larsen", progress: 83 },
//   { id: 8, name: "Dogecoin", creator: "Billy Markus & Jackson Palmer", progress: 67 },
//   { id: 9, name: "Shiba Inu", creator: "Ryoshi", progress: 55 },
//   { id: 10, name: "Litecoin", creator: "Charlie Lee", progress: 80 },
//   { id: 11, name: "Avalanche", creator: "Emin Gün Sirer", progress: 75 },
//   { id: 12, name: "Polygon", creator: "Jaynti Kanani, Sandeep Nailwal, Anurag Arjun", progress: 88 },
//   { id: 13, name: "Chainlink", creator: "Sergey Nazarov", progress: 82 },
//   { id: 14, name: "Cosmos", creator: "Jae Kwon", progress: 79 },
//   { id: 15, name: "Tezos", creator: "Arthur Breitman & Kathleen Breitman", progress: 76 },
//   { id: 16, name: "Algorand", creator: "Silvio Micali", progress: 81 },
//   { id: 17, name: "VeChain", creator: "Sunny Lu", progress: 74 },
//   { id: 18, name: "Stellar", creator: "Jed McCaleb", progress: 84 },
//   { id: 19, name: "TRON", creator: "Justin Sun", progress: 73 },
//   { id: 20, name: "Filecoin", creator: "Juan Benet", progress: 69 },
// ];

// const mockData = [
//   {
//     id: 1,
//     name: "Bitcoin",
//     creator: "Satoshi Nakamoto",
//     progress: 95,
//     image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
//   },
//   {
//     id: 2,
//     name: "Ethereum",
//     creator: "Vitalik Buterin",
//     progress: 88,
//     image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//   },
//   {
//     id: 3,
//     name: "Cardano",
//     creator: "Charles Hoskinson",
//     progress: 72,
//     image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
//   },
//   // {
//   //   id: 4,
//   //   name: "Polkadot",
//   //   creator: "Gavin Wood",
//   //   progress: 85,
//   //   image: "https://cryptologos.cc/logos/polkadot-dot-logo.png",
//   // },
//   {
//     id: 5,
//     name: "Binance Coin",
//     creator: "Binance Team",
//     progress: 90,
//     image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
//   },
//   {
//     id: 6,
//     name: "Solana",
//     creator: "Anatoly Yakovenko",
//     progress: 78,
//     image: "https://cryptologos.cc/logos/solana-sol-logo.png",
//   },
//   {
//     id: 7,
//     name: "Ripple",
//     creator: "Chris Larsen",
//     progress: 83,
//     image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
//   },
//   {
//     id: 8,
//     name: "Dogecoin",
//     creator: "Billy Markus & Jackson Palmer",
//     progress: 67,
//     image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
//   },
//   {
//     id: 9,
//     name: "Shiba Inu",
//     creator: "Ryoshi",
//     progress: 55,
//     image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
//   },
//   {
//     id: 10,
//     name: "Litecoin",
//     creator: "Charlie Lee",
//     progress: 80,
//     image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
//   },
//   {
//     id: 11,
//     name: "Avalanche",
//     creator: "Emin Gün Sirer",
//     progress: 75,
//     image: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
//   },
//   {
//     id: 12,
//     name: "Polygon",
//     creator: "Jaynti Kanani, Sandeep Nailwal, Anurag Arjun",
//     progress: 88,
//     image: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//   },
//   {
//     id: 13,
//     name: "Chainlink",
//     creator: "Sergey Nazarov",
//     progress: 82,
//     image: "https://cryptologos.cc/logos/chainlink-link-logo.png",
//   },
//   {
//     id: 14,
//     name: "Cosmos",
//     creator: "Jae Kwon",
//     progress: 79,
//     image: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
//   },
//   {
//     id: 15,
//     name: "Tezos",
//     creator: "Arthur Breitman & Kathleen Breitman",
//     progress: 76,
//     image: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
//   },
// ];

// const mockData = [
//   {
//     id: 1,
//     name: "Bitcoin",
//     creator: "Satoshi Nakamoto",
//     progress: 95,
//     image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
//     description:
//       "Bitcoin is the first decentralized digital currency, enabling peer-to-peer transactions on a secure blockchain.",
//   },
//   {
//     id: 2,
//     name: "Ethereum",
//     creator: "Vitalik Buterin",
//     progress: 88,
//     image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
//     description:
//       "Ethereum is a decentralized platform that supports smart contracts and decentralized applications (dApps).",
//   },
//   {
//     id: 3,
//     name: "Cardano",
//     creator: "Charles Hoskinson",
//     progress: 72,
//     image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
//     description:
//       "Cardano is a blockchain platform focused on sustainability, scalability, and interoperability.",
//   },
//   // {
//   //   id: 4,
//   //   name: "Polkadot",
//   //   creator: "Gavin Wood",
//   //   progress: 85,
//   //   image: "https://cryptologos.cc/logos/polkadot-dot-logo.png",
//   //   description:
//   //     "Polkadot enables cross-blockchain transfers of any type of data or asset, enabling interoperability.",
//   // },
//   {
//     id: 5,
//     name: "Binance Coin",
//     creator: "Binance Team",
//     progress: 90,
//     image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
//     description:
//       "Binance Coin powers the Binance ecosystem, offering utility for transactions and services on the platform.",
//   },
//   {
//     id: 6,
//     name: "Solana",
//     creator: "Anatoly Yakovenko",
//     progress: 78,
//     image: "https://cryptologos.cc/logos/solana-sol-logo.png",
//     description:
//       "Solana is a high-performance blockchain supporting scalable decentralized applications and crypto projects.",
//   },
//   {
//     id: 7,
//     name: "Ripple",
//     creator: "Chris Larsen",
//     progress: 83,
//     image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
//     description:
//       "Ripple is a digital payment protocol for fast, low-cost cross-border money transfers.",
//   },
//   {
//     id: 8,
//     name: "Dogecoin",
//     creator: "Billy Markus & Jackson Palmer",
//     progress: 67,
//     image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
//     description:
//       "Dogecoin started as a meme cryptocurrency but has gained popularity for tipping and charity donations.",
//   },
//   {
//     id: 9,
//     name: "Shiba Inu",
//     creator: "Ryoshi",
//     progress: 55,
//     image: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
//     description:
//       "Shiba Inu is a meme-based cryptocurrency that aims to become an Ethereum-based alternative to Dogecoin.",
//   },
//   {
//     id: 10,
//     name: "Litecoin",
//     creator: "Charlie Lee",
//     progress: 80,
//     image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
//     description:
//       "Litecoin is a peer-to-peer cryptocurrency designed to enable fast and low-cost payments globally.",
//   },
//   {
//     id: 11,
//     name: "Avalanche",
//     creator: "Emin Gün Sirer",
//     progress: 75,
//     image: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
//     description:
//       "Avalanche is a blockchain platform designed for decentralized finance applications and enterprise solutions.",
//   },
//   {
//     id: 12,
//     name: "Polygon",
//     creator: "Jaynti Kanani, Sandeep Nailwal, Anurag Arjun",
//     progress: 88,
//     image: "https://cryptologos.cc/logos/polygon-matic-logo.png",
//     description:
//       "Polygon is a protocol for building and connecting Ethereum-compatible blockchain networks.",
//   },
//   {
//     id: 13,
//     name: "Chainlink",
//     creator: "Sergey Nazarov",
//     progress: 82,
//     image: "https://cryptologos.cc/logos/chainlink-link-logo.png",
//     description:
//       "Chainlink provides reliable tamper-proof data for complex smart contracts on any blockchain.",
//   },
//   {
//     id: 14,
//     name: "Cosmos",
//     creator: "Jae Kwon",
//     progress: 79,
//     image: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
//     description:
//       "Cosmos is an ecosystem of blockchains that can scale and interoperate with each other.",
//   },
//   {
//     id: 15,
//     name: "Tezos",
//     creator: "Arthur Breitman & Kathleen Breitman",
//     progress: 76,
//     image: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
//     description:
//       "Tezos is a blockchain platform for smart contracts with an emphasis on governance and upgradability.",
//   },
// ];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <HeroSection />
        <SearchFilter />
        <div className="text-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {mockData.map((item) => (
              <LaunchCard
                key={item.id}
                image={item.image}
                id={item.id}
                name={item.name}
                creator={item.creator}
                progress={item.progress}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
