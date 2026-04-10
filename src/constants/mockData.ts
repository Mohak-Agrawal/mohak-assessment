/**
 * Mock Data and Types
 * Realistic crypto asset management sample data
 */

// ============================================================================
// Types
// ============================================================================

export interface Investor {
  id: string;
  name: string;
  email: string;
  investedAmount: number;
  currentValue: number;
  returnPercentage: number;
  joinDate: string;
  status: "active" | "inactive";
}

export interface Commission {
  id: string;
  investorId: string;
  investorName: string;
  date: string;
  amount: number;
  type: "transaction" | "fee" | "bonus";
}

export interface PortfolioAsset {
  id: string;
  assetName: string;
  symbol: string;
  investedAmount: number;
  currentValue: number;
  changePercent: number;
  quantity: number;
}

// ============================================================================
// Mock Data
// ============================================================================

export const investors: Investor[] = [
  {
    id: "inv_001",
    name: "Alex Johnson",
    email: "alex@example.com",
    investedAmount: 250000,
    currentValue: 318500,
    returnPercentage: 27.4,
    joinDate: "2023-06-15",
    status: "active",
  },
  {
    id: "inv_002",
    name: "Morgan Chen",
    email: "morgan@example.com",
    investedAmount: 180000,
    currentValue: 201600,
    returnPercentage: 12.0,
    joinDate: "2023-09-22",
    status: "active",
  },
  {
    id: "inv_003",
    name: "Sarah Williams",
    email: "sarah@example.com",
    investedAmount: 500000,
    currentValue: 625000,
    returnPercentage: 25.0,
    joinDate: "2023-03-10",
    status: "active",
  },
  {
    id: "inv_004",
    name: "James Rodriguez",
    email: "james@example.com",
    investedAmount: 150000,
    currentValue: 142500,
    returnPercentage: -5.0,
    joinDate: "2024-01-08",
    status: "active",
  },
  {
    id: "inv_005",
    name: "Emma Thompson",
    email: "emma@example.com",
    investedAmount: 320000,
    currentValue: 384000,
    returnPercentage: 20.0,
    joinDate: "2023-07-19",
    status: "active",
  },
];

export const commissions: Commission[] = [
  {
    id: "comm_001",
    investorId: "inv_001",
    investorName: "Alex Johnson",
    date: "2025-04-08",
    amount: 2541.25,
    type: "transaction",
  },
  {
    id: "comm_002",
    investorId: "inv_002",
    investorName: "Morgan Chen",
    date: "2025-04-07",
    amount: 500.0,
    type: "fee",
  },
  {
    id: "comm_003",
    investorId: "inv_003",
    investorName: "Sarah Williams",
    date: "2025-04-07",
    amount: 5000.0,
    type: "transaction",
  },
  {
    id: "comm_004",
    investorId: "inv_005",
    investorName: "Emma Thompson",
    date: "2025-04-06",
    amount: 1000.0,
    type: "bonus",
  },
  {
    id: "comm_005",
    investorId: "inv_001",
    investorName: "Alex Johnson",
    date: "2025-04-05",
    amount: 3815.0,
    type: "transaction",
  },
  {
    id: "comm_006",
    investorId: "inv_004",
    investorName: "James Rodriguez",
    date: "2025-04-05",
    amount: 750.0,
    type: "fee",
  },
  {
    id: "comm_007",
    investorId: "inv_002",
    investorName: "Morgan Chen",
    date: "2025-04-04",
    amount: 2500.0,
    type: "transaction",
  },
  {
    id: "comm_008",
    investorId: "inv_003",
    investorName: "Sarah Williams",
    date: "2025-04-03",
    amount: 1250.0,
    type: "bonus",
  },
];

export const portfolioAssets: PortfolioAsset[] = [
  {
    id: "asset_001",
    assetName: "Bitcoin",
    symbol: "BTC",
    investedAmount: 450000,
    currentValue: 562500,
    changePercent: 25.0,
    quantity: 12.5,
  },
  {
    id: "asset_002",
    assetName: "Ethereum",
    symbol: "ETH",
    investedAmount: 280000,
    currentValue: 336000,
    changePercent: 20.0,
    quantity: 145.8,
  },
  {
    id: "asset_003",
    assetName: "Solana",
    symbol: "SOL",
    investedAmount: 120000,
    currentValue: 144000,
    changePercent: 20.0,
    quantity: 2400,
  },
];

/**
 * Calculate portfolio totals
 */
export const getPortfolioTotals = () => {
  const totalInvested = portfolioAssets.reduce(
    (sum, asset) => sum + asset.investedAmount,
    0,
  );
  const totalCurrent = portfolioAssets.reduce(
    (sum, asset) => sum + asset.currentValue,
    0,
  );
  const totalGain = totalCurrent - totalInvested;
  const totalReturnPercent = (totalGain / totalInvested) * 100;

  return {
    totalInvested,
    totalCurrent,
    totalGain,
    totalReturnPercent,
  };
};

/**
 * Get commissions for a specific investor
 */
export const getInvestorCommissions = (investorId: string): Commission[] => {
  return commissions.filter((c) => c.investorId === investorId);
};

/**
 * Get investor by ID
 */
export const getInvestorById = (id: string): Investor | undefined => {
  return investors.find((inv) => inv.id === id);
};
