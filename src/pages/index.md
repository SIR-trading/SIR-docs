# What is SIR

Synthetics Implemented Right (SIR) is a new DeFi primitive producing two types of synthetic tokens. One the one hand it allows for the permissionless creation of
- **leveraged ETFs** for any pair of tokens that exist in Uniswap v3,

and on the other hand it provides
- **stable tokens** pegged 1-to-1 to other tokens and backed by any collateral of choice.

In order to be **maximally trustless**:
1. SIR's smart contracts are immutable (i.e., they cannot be modified by anone)
2. counterparty risk is minimized by only interacting with the Uniswap v3 protocol.

SIR is built as a layer on top of Uniswap v3, and unlocks the possibility of tokenized leveraged trading and the permissionless creation of all types of stable tokens.


# Why SIR?

## The Hidden Risks of Leveraged Trading

[Demand for leveraged trading](https://finance.yahoo.com/news/ethereum-based-leverage-trading-protocol-162512422.html) continues to rise in crypto.
Margin trading platforms lure new traders with the promise of higher potential gains, however, it also comes with extra risk. If price moves against the trader they **risk liquidiation**, i.e., complete loss of their capital (margin). The higher the leverage, the higher the risk. In fact it is estimated that [95% of the traders lose money](https://cointelegraph.com/news/day-trading-bitcoin-why-95-of-traders-lose-money-and-fail). Contrary to spot trading, margin traders are charged funding fees for the borrowed capital based on the funding rate which slowly erodes their capital.

A similar type of financial product are leveraged ETFs. In a nutshell, leverage ETFs in crypto are tokens which track the price of other tokens with a constantly rebalanced leverage, usually daily. E.g., on a 2x leveraged ETF tracking ETH/USD, if the price increases 5% in a day, then the holder of the ETF would expect a 10% gain. In addition to the liquidation risk, leveraged ETFs suffer from [**volatility decay**](https://www.coingecko.com/buzz/part-1-introduction-to-crypto-leveraged-etf). These risks are mitigated by SIR in novel ways as described next.


## Long-Term *Hodling*

To allow users to hold leveraged ETFs over the long-run, SIR is built from first principles with the goal in mind of mitigating all mentioned risks and enable a new DeFi primitive: leveraged ETFs as an investment. SIR relies on 2 main mechanisms:
1. Continuous rebalancing
2. No Funding Fees

SIR delegates the task of rebalancing to liquidity providers who do it on a block-by-block basis in exchange for fees. In the best case scenario, albeit probably too optimistic, where the leverage (`l`) remains constant, the leverage ETF’s price (`q`) becomes path-independent: `q=p^l`, where `p` is the price of the underlying asset, and `l` is the leverage ratio. By making the price of the leverage ETF depend only on the price of the underlying asset (no volatility decay), the volatility decay and the liquidation risk are mitigated.

Lastly, SIR only charges fees when entering or exiting a position. Therefore, the users' capital is not slowly drained through fees even when they maintain the leveraged position.

## Tokenized Leveraged

The leveraged ETFs are tokenized with an ERC20 token with symbol APE. This is in fact a rebasing ERC20 token (like Ample from Ampleforth) which is pegged to the underlying asset. For instance, if the underlying is ETH, as the price of ETH increases, so does the balance of APE. With a simple glimpse to his balance a user knows how much he has gain/lost compared to holding spot ETH.
Thus, the leveraged ETF can be transfered and traded in secondary markets, or used as collateral in other platforms. The possibilities of tokenized leveraged are endless.

## Trustless Stable Tokens

Stablecoins are tokens pegged to some form of fiat, usually the US dollar. More generally, stable tokens are tokens that are pegged 1-to-1 to other tokens/currencies. The main advantage of stable tokens is that they allow holders to gain price exposure to other assets without some of their pitfalls. As an example a token pegged to USDC allows its holders to keep a stable cryptocurrency without the potential risk of getting their coins frozen by Circle.

Unfortunately, there do not exist many stable tokens that are really trustless. For instance, DAI is the leader of “decentralized stablecoins”, and yet it is 37% backed by USDC at the time of this post. Sometimes it is the quality of the collateral, or the governance, or it is just not very stable. In addition, all of these stable tokens are manually crafted one by one in a permissioned way. SIR changes this by providing a protocol where anyone can spin a stable token pegged to any digital asset and backed by some collateral of choice with some user-defined collateralization ratio. All of SIR’s stable tokens share the symbol TEA.


## Yield Farming

The 90% of the fees collected by SIR go to users providing liquidity. Thus, SIR will offer new streams for yield, which in turns should help bootstrap its liquidity.






![Docs Version Dropdown](/img/intro/pool-diagram.png)