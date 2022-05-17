# What is SIR?

Synthetics Implemented Right (SIR) is a new DeFi protocol built from first principles that offers two types of synthetic tokens:

1. **leveraged tokens** called APE🐵 tokens
2. **yield-earning tokens** called TEA🍵 tokens, including yield-bearing stablecoins.

After the hangover of _DeFi 2.0_, we believe that is necessary for DeFi to go back to its origins of producing **maximally trustless** protocols/dapps. Our principles are similar to those of Uniswap in the sense that SIR's smart contracts are

1. Immutable, i.e., no upgradable contracts.
2. Minimal dependancies. Only external dependancy is the Uniswap v3 price oracle which is arguably the most decentralized oracle in DeFi.
3. Permissionless. Anyone can create APE or new TEA tokens with the parameters of their choice.

⚠️ SIR has not launched yet. We plan on launching on Arbitrum in a few months. Meanwhile we are looking to raise some capital to pay for our audits and hire some talent. If you think you can help us in any way, shape or form, please contact us. Talk to us in [Discord](https://discord.com/invite/M2SRBDPUR2) and follow our [Twitter](https://twitter.com/SIRdotTrading).

The _fungible vaults_ that makes it possible are described on a high-level on [Twitter thread](https://twitter.com/Xatarrer/status/1522934655774769154) and more in detail in our [whitepaper](https://github.com/SIR-trading/SIR-white_paper/blob/main/Whitepaper.pdf).

# Why SIR?

## The Hidden Risks of Leveraged Trading

[Demand for leveraged trading](https://finance.yahoo.com/news/ethereum-based-leverage-trading-protocol-162512422.html) continues to rise in crypto.
Margin trading platforms lure new traders with the promise of higher potential gains, however, it also comes with extra risk. If price moves against the trader they **risk liquidiation**, i.e., complete loss of their capital (margin). The higher the leverage, the higher the risk. In fact it is estimated that [95% of the traders lose money](https://cointelegraph.com/news/day-trading-bitcoin-why-95-of-traders-lose-money-and-fail). Contrary to spot trading, margin traders are charged funding fees for the borrowed capital based on the funding rate which slowly erodes their capital.

A similar type of financial product are leveraged ETFs. In a nutshell, leverage ETFs in crypto are tokens which track the price of other tokens with a constantly rebalanced leverage, usually daily. E.g., on a 2x leveraged ETF tracking ETH/USD, if the price increases 5% in a day, then the holder of the ETF would expect a 10% gain. In addition to the **liquidation risk**, leveraged ETFs suffer from [**volatility decay**](https://www.coingecko.com/buzz/part-1-introduction-to-crypto-leveraged-etf). These risks are mitigated by SIR in novel ways as described next.

## Long-Term _Hodling_

The main goal of SIR is to democratize leverage by making it safer, and even allow long-term leveraged positions. SIR relies on a few mechanisms:

1. Continuous leverage rebalancing
2. No Funding Fees
3. Long oracle TWAP (time-weighted average price)

Firstly, SIR delegates the task of rebalancing to liquidity providers who do it on a block-by-block basis in exchange for fees. In the best case scenario, albeit probably too optimistic, where the leverage (_l_) remains constant, the leverage ETF’s price (_q_) becomes path-independent: _q=p^l_, where _p_ is the price of the underlying asset, and _l_ is the leverage ratio. By making the price of the leveraged token depend only on the price of the underlying asset, the volatility decay and the liquidation risk are mitigated.

Secondly, SIR only charges fees when entering (minting APE) or exiting a position (burning APE). Therefore, the users' capital is not slowly drained through fees even when they maintain the leveraged position.

Lastly, the long TWAP protects leveraged investors from liquidations due to extreme short-term price spikes. Thanks to the cheaper gas prices of `sstore` on Arbitrum, we are planning on using a 3-day TWAP.

Read this [Tweeter thread](https://twitter.com/Xatarrer/status/1525098184225136640) for a high-level technical explanation of how leverage works.

<!-- ## Tokenized Leverage

The leveraged ETFs are tokenized with an ERC20 token with symbol APE. This is in fact a rebasing ERC20 token (like Ample from Ampleforth) which is pegged to the underlying asset. For instance, if the underlying is ETH, as the price of ETH increases, so does the balance of APE. With a simple glimpse to his balance a user knows how much he has gain/lost compared to holding spot ETH.
Thus, the leveraged ETF can be transfered and traded in secondary markets, or used as collateral in other platforms. The possibilities of tokenized leveraged are endless. -->

## Non-ponzi Yield

Fees in SIR play an important role as they help stabilize the actual leverage ratio in the pools. The goal is that the actual leverage converges towards the targetted one.
Contrary to many DeFi experiments where the source of yield comes from selling a new made-up token, SIR pays yield to APE/TEA holders from the fees captured by the system.

TEA tokens are always pegged to another token and are backed by the collateral in the pool. For instance, TEA could be pegged to WBTC and backed by a (possibly large) reserve of USDT. Thus, holding TEA is like holding type of synthetic BTC.
A second example is one where TEA is pegged to USDC and backed by ETH with a 300% collateralization factor, making it effectively a fully trustless stablecoin.

## Yield-Earning Stablecoins

Stablecoins are tokens pegged to some form of fiat, usually the US dollar. More generally, stable tokens are tokens that are pegged 1-to-1 to other tokens/currencies. The main advantage of stable tokens is that they allow holders to gain price exposure to other assets without some of their pitfalls. As an example a TEA token pegged to USDC allows its holders to keep a stable cryptocurrency without the potential risk of getting their coins frozen by Circle.

Unfortunately, there do not exist many stable tokens that are really trustless. For instance, DAI is the leader of "decentralized stablecoins", and yet it is 37% backed by USDC at the time of this post. Sometimes it is the quality of the collateral, or the governance, or it is just not very stable. In addition, all of these stable tokens are manually crafted one by one in a permissioned way. SIR changes this by providing a protocol where anyone can spin a stable token pegged to any digital asset and backed by some collateral of choice with some user-defined collateralization ratio.

<!-- ## Yield Farming

The 90% of the fees collected by SIR go to users providing liquidity. Thus, SIR will offer new streams for yield, which in turns should help bootstrap its liquidity. -->

<!-- ![Docs Version Dropdown](/img/intro/pool-diagram.png) -->
