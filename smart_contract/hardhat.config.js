require("@nomiclabs/hardhat-waffle");

//0xB051a5c220E9E3Eb443D37D2267e74e4742eeDdf

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/c7lH8MzYl7bVyp2i98q0R21nmdtbWfX1",
      accounts: [
        "1f77638dfb1467c47c50aca39c23b9c7c49dc59965b93bc83c3393b19bd871a8",
      ],
    },
  },
};
