"use strict";(self.webpackChunksir_docs=self.webpackChunksir_docs||[]).push([[844],{5710:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return h},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={},l="What is SIR",d={type:"mdx",permalink:"/SIR-docs/",source:"@site/src/pages/index.md"},h=[{value:"The Hidden Risks of Leveraged Trading",id:"the-hidden-risks-of-leveraged-trading",children:[]},{value:"Long-Term <em>Hodling</em>",id:"long-term-hodling",children:[]},{value:"Leveraged Tokens",id:"leveraged-tokens",children:[]},{value:"Creative Freedom",id:"creative-freedom",children:[]},{value:"Yield Farming",id:"yield-farming",children:[]},{value:"Trustless Stable Tokens",id:"trustless-stable-tokens",children:[]}],p={toc:h};function c(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-sir"},"What is SIR"),(0,r.kt)("p",null,"Synthetics Implemented Right (SIR) is a new DeFi primitive producing two types of synthetic tokens. One the one hand it allows for the permissionless creation of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"leveraged ETFs")," for any pair of tokens that exist in Uniswap v3,")),(0,r.kt)("p",null,"and on the other hand it provides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"stable tokens")," pegged 1-to-1 to other tokens and backed by any collateral of choice.")),(0,r.kt)("p",null,"In order to be ",(0,r.kt)("strong",{parentName:"p"},"maximally trustless"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SIR's smart contracts are immutable (i.e., they cannot be modified by anone)"),(0,r.kt)("li",{parentName:"ol"},"counterparty risk is minimized by only interacting with the Uniswap v3 protocol.")),(0,r.kt)("p",null,"SIR is built as a layer on top of Uniswap v3 that unlocks the possibility of tokenized leveraged trading and the permissionless creation of all types of stable tokens."),(0,r.kt)("h1",{id:"why-sir"},"Why SIR?"),(0,r.kt)("h2",{id:"the-hidden-risks-of-leveraged-trading"},"The Hidden Risks of Leveraged Trading"),(0,r.kt)("p",null,"Demand for leveraged trading continues to rise](",(0,r.kt)("a",{parentName:"p",href:"https://finance.yahoo.com/news/ethereum-based-leverage-trading-protocol-162512422.html"},"https://finance.yahoo.com/news/ethereum-based-leverage-trading-protocol-162512422.html"),") in crypto.\nMargin trading platforms lure new traders with the promise of higher potential gains, however, it also comes with extra risk. If price moves against the trader they ",(0,r.kt)("strong",{parentName:"p"},"risk liquidiation"),", i.e., complete loss of their capital (margin). The higher the leverage, the higher the risk. In fact it is estimated that ",(0,r.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/day-trading-bitcoin-why-95-of-traders-lose-money-and-fail"},"95% of the traders lose money"),". Contrary to spot trading, margin traders are charged funding fees for the borrowed capital based on the funding rate which slowly erodes their capital."),(0,r.kt)("p",null,"A similar type of financial product are leveraged ETFs. In a nutshell, leverage ETFs in crypto are tokens which track the price of other tokens with a constantly rebalanced leverage, usually daily. E.g., on a 2x leveraged ETF tracking ETH/USD, if the price increases 5% in a day, then the holder of the ETF would expect a 10% gain. In addition to the liquidation risk, leveraged ETFs suffer from ",(0,r.kt)("a",{parentName:"p",href:"https://www.coingecko.com/buzz/part-1-introduction-to-crypto-leveraged-etf"},"volatility decay"),". These risks are mitigated by SIR in novel ways as described next."),(0,r.kt)("h2",{id:"long-term-hodling"},"Long-Term ",(0,r.kt)("em",{parentName:"h2"},"Hodling")),(0,r.kt)("p",null,"To allow users to hold leveraged ETFs over the long-run, SIR is built from first principles with the goal in mind of mitigating all mentioned risks and enable a new DeFi primitive: leveraged ETFs as an investment. SIR relies on 2 main mechanisms:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Continuous rebalancing"),(0,r.kt)("li",{parentName:"ol"},"No Funding Fees")),(0,r.kt)("p",null,"SIR delegates the task of rebalancing to liquidity providers who do it on a block-by-block basis in exchange for fees. In the best case scenario, albeit probably too optimistic, where the leverage (",(0,r.kt)("inlineCode",{parentName:"p"},"l"),") remains constant, the leverage ETF\u2019s price (",(0,r.kt)("inlineCode",{parentName:"p"},"q"),") becomes path-independent: ",(0,r.kt)("inlineCode",{parentName:"p"},"q=p^l"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," is the price of the underlying asset, and ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," is the leverage ratio. By making the price of the leverage ETF depend only on the price of the underlying asset (no volatility decay), the volatility decay and the liquidation risk are mitigated."),(0,r.kt)("p",null,"Lastly, SIR only charges fees when getting in or out of a position. Therefore, the users' capital is not slowly drained through fees even when they maintain the leveraged position."),(0,r.kt)("h2",{id:"leveraged-tokens"},"Leveraged Tokens"),(0,r.kt)("h2",{id:"creative-freedom"},"Creative Freedom"),(0,r.kt)("h2",{id:"yield-farming"},"Yield Farming"),(0,r.kt)("h2",{id:"trustless-stable-tokens"},"Trustless Stable Tokens"),(0,r.kt)("p",null,"We are aming to trustable stable tokens together with leverage trading to offer the best of both worlds; decentralized stable tokens with low risk, that will grow with fees, and leverage trading for maximum capital eficiency for a different kind of investment.\nSIR\u2019s stable tokens share the symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"TEA")," and the leveraged ETFs share the symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"APE"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docs Version Dropdown",src:n(2210).Z})))}c.isMDXComponent=!0},2210:function(e,t,n){t.Z=n.p+"assets/images/pool-diagram-be2c96c6c3074f346bb7dc8e1f2d31a8.png"}}]);