var assert = require("assert");

export default class AugBondCurve {
  constructor(
    k = 4,
    theta = 35, // initial funding pool allocation
    d0 = 3e6,   // initial raise xDAI
    p0 = 0.01   // initial price xDAI
  ) {
    assert(theta <= 100 && theta >= 0);

    this.k = k;
    this.theta = theta;
    this.d0 = d0;
    this.p0 = p0;
  }

  // initial reserve, xDAI
  get r0() {
    return (1 - this.theta / 100) * this.d0;
  }

  // initial supply, tokens
  get s0() {
    return this.d0 / this.p0;
  }

  // invariant coefficient
  get v0() {
    return this.s0 ** k / this.r0;
  }
}

// Ideal Usage
/*
var market = new AugBondCurve();

// TODO: how does it transition from the hatch phase into the open phase
market.phase() -> "hatch" -> "open"

// TODO: buying (different in each phase?) (what's returned?)
market.buy(...)

// TODO: sell (different in each phase?) (check for unvested tokens)
market.sell(...)

market.balance(0xUSER_ADDRESS) -> (vested, unvested)
market.sellPrice()
market.buyPrice()
market.supplyBalance()
market.reserveBalance()

// TODO: simulate the effects of a buy
market.simulateBuy(...amount...) -> (tokensBought, tokensValue, reserveAdded)

// TODO: simulate the effects of a sell
market.simulateSell(...amount...) -> (reserveDispensed)
*/

// Protocol Structure
/*
AugBondCurve
|
--TokenPool?
  |
  --FundingPool?
*/
