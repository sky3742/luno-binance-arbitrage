type balance = {
  account_id: string;
  asset: string;
  balance: number;
  reserved: number;
  unconfirmed: number;
};

type ticker = {
  pair: string;
  timestamp: number;
  bid: number;
  ask: number;
  last_trade: number;
  rolling_24_hour_volume: number;
  status: string;
};

export function getBalance(): Promise<balance[]>;
export function getLatestPrice({ luno: pair }): Promise<ticker>;
