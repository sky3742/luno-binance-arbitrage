# Arbitrage opportunity between Luno and Binance

This is a console app that will quote prices from Luno and Binance, and then calculate the profit percentage. 

Profit calculated by Luno's ask price and Binance's bid price **_(Buying directly from Luno's order book and selling directly to Binance's order book)_**.

_*Disclaimer: The profit calculated is not inclusive of fees_

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Luno_ApiKey`

`Luno_ApiSecret`

`Binance_ApiKey`

`Binance_ApiSecret`

Simple copy `.env.example` to `.env` and fill up with relavent value

## Run Locally

Clone the project

```bash
  git clone git@github.com:sky3742/luno-binance-arbitrage.git
```

Go to the project directory

```bash
  cd luno-binance-arbitrage
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Screenshots

![App Screenshot](/Screenshot.png)
