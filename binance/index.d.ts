type ticker = {
  symbol: string;
  bidPrice: number;
  bidQty: number;
  askPrice: number;
  askQty: number;
  time: number;
};

export function getLatestPrice(symbol: string): Promise<ticker>;
