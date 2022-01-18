import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Blogspot.com"
            },
            "author": "noreply@blogger.com (Unknown)",
            "title": "Elon Musk reveals who bitcoin's creator Satoshi Nakamoto might be",
            "description": "Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency Bitcoin. \"You can watch ideas evolve before Bitcoin was lau…",
            "url": "https://techncruncher.blogspot.com/2021/12/elon-musk-reveals-who-bitcoins-creator.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEik_48hPzMzsDzwfdUeHj4jNGqYGevEuVjTTPkAGTu9bRN3oePxV6bxF897GK8Az3AaSqUOalYXNG4HSCy0fW5KUHuruCWP8hAfZxgrgbzh-dsbLM9jxyFGCthOZdBCa1dNkqk6mrVl0VtflsV2VvKXfGnwL6-68m-mxp7qHJuLlvqGIahZ9YDe5mt97w=w1200-h630-p-k-no-nu",
            "publishedAt": "2021-12-29T20:41:00Z",
            "content": "Musk.MARK RALSTON/AFP via Getty Images\r\nElon Musk seems to agree with many that hyper-secret cryptocurrency expert Nick Szabo could be Satoshi Nakamoto, the mysterious creator of the digital currency… [+1467 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss",
            "description": "The central Asian country became No. 2 in the world for Bitcoin mining. But political turmoil and power cuts have hit hard, and the future looks bleak.",
            "url": "https://www.wired.com/story/kazakhstan-cryptocurrency-mining-unrest-energy/",
            "urlToImage": "https://media.wired.com/photos/61de2d453e654a13e9a16ef0/191:100/w_1280,c_limit/Business_Kazakhstan-2HDE52K.jpg",
            "publishedAt": "2022-01-12T12:00:00Z",
            "content": "When Denis Rusinovich set up cryptocurrency mining company Maveric Group in Kazakhstan in 2017, he thought he had hit the jackpot. Next door to China and Russia, the country had everything a Bitcoin … [+4140 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jon Porter",
            "title": "Jack Dorsey’s Block is working to make Bitcoin mining easier",
            "description": "Block is working on building an “open Bitcoin mining system,” its CEO Jack Dorsey has announced. The company’s goals for the system are for it to be easily available, reliable, and relatively power efficient.",
            "url": "https://www.theverge.com/2022/1/14/22883500/jack-dorsey-block-bitcoin-mining-system-open-source-mainstream",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/NE548fVufAlHoBliurOdnG-lfuw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23168502/1321753348.jpg",
            "publishedAt": "2022-01-14T13:46:28Z",
            "content": "Were officially building an open Bitcoin mining system\r\nPhoto by Joe Raedle/Getty Images\r\nBlock, the payment company formerly known as Square, is working on building an open Bitcoin mining system, it… [+2078 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Block is officially building an 'open Bitcoin mining system,' says founder Jack Dorsey",
            "description": "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provider, then known as Square, was considering working on the proj…",
            "url": "https://www.engadget.com/jack-dorseys-block-is-officially-building-an-open-bitcoin-mining-system-114033482.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/b08eca30-67a7-11ec-bfef-a5351ba20ef6",
            "publishedAt": "2022-01-14T11:40:33Z",
            "content": "Block founder Jack Dorsey has announced on Twitter that the company is officially building an open bitcoin mining system. Dorsey first announced in October last year that the digital payments provide… [+1584 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blogspot.com"
            },
            "author": "noreply@blogger.com (Unknown)",
            "title": "Musk says Tesla to accept dogecoin for merchandise",
            "description": "<table><tr><td></td></tr><tr><td> Representation of cryptocurrency Dogecoin is seen in this illustration taken November 29, 2021. REUTERS/Dado Ruvic/Illustration/File Photo</td></tr>\r\n</table>Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogeco…",
            "url": "https://techncruncher.blogspot.com/2022/01/musk-says-tesla-to-accept-dogecoin-for.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEiAHi2o-pAdNQNqbU6eVnDtHVY2HvIYdHuBHFQXpjzRRvUkNNNjSD8rJIH_TmYn8--wpME7gw7bhfJ6KoISJSNOJQLfYqr-HZT02wXpVXeg0Ar9yGLKD_ZNbToLt0-vBjvldJdotQOlbaWzlZonZIIINp6eG1v0xyMZdNVTVX4hq23Qkx6XGF9NIurkfw=w1200-h630-p-k-no-nu",
            "publishedAt": "2022-01-14T14:14:00Z",
            "content": "Tesla Inc (TSLA.O) will accept the meme-based cryptocurrency dogecoin as payment for its products such as the \"Giga Texas\" belt buckle and mini  electric vehicle models, CEO Elon Musk said on Friday … [+1482 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Blogspot.com"
            },
            "author": "noreply@blogger.com (Unknown)",
            "title": "Crypto CEO becomes one of the world's richest billionaires",
            "description": "<table><tr><td></td></tr><tr><td>\"Zhao Changpeng has become the world's biggest cryptocurrency billionaire(Image: Bloomberg via Getty Images)</td></tr>\r\n</table>A cryptocurrency CEO has become one of the richest people on the planet.Changpeng \"CZ\" Zhao, who m…",
            "url": "https://techncruncher.blogspot.com/2022/01/crypto-ceo-becomes-one-of-worlds.html",
            "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEj978sCv3gLJg0vBKUzMeJLfis0RTv9EXx5SBp1dBHmTSW5zI946qp2JBTkwo-IFL5ZNv2OQRdVr1Y7qR__vDrWKrS1TUMgRVxmAoHhDXfO4R5FII7PwGwWUvzIjR9wlfuZQIKBl-lprQH3Qmpw1DZQSJED9v3GGMsDJcaxBCkpPDtCBuKi15my8tFvLA=w1200-h630-p-k-no-nu",
            "publishedAt": "2022-01-11T12:29:00Z",
            "content": "A cryptocurrency CEO has become one of the richest people on the planet.Changpeng \"CZ\" Zhao, who manages the Binance cryptocurrency exchange, has joined the ranks of the world's top billionaires, wit… [+3566 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. SEC rejects Valkyrie, Kryptoin bitcoin trusts - Reuters",
            "description": "The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green light the effort after approving futures-backed bitcoin funds in October.",
            "url": "https://www.reuters.com/markets/funds/us-sec-rejects-valkyrie-kryptoin-bitcoin-trusts-2021-12-23/",
            "urlToImage": "https://www.reuters.com/resizer/VcQMWevXkM8HjQhqCD_PvcxdZa4=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RDU5LE4KKJP7LDUVELT6RRXH2Y.jpg",
            "publishedAt": "2021-12-23T20:25:00Z",
            "content": "Dec 23 (Reuters) - The U.S. Securities and Exchange Commission vetoed two proposals to offer bitcoin exchange-traded funds, dealing a blow to market participants who had hoped the agency would green … [+1769 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hmalik@insider.com (Hamza Fareed Malik)",
            "title": "Jack Dorsey says Block is building a bitcoin mining system so that anyone can easily buy a rig",
            "description": "Block is officially building a bitcoin mining system to make mining bitcoin \"more distributed and efficient.\"",
            "url": "https://markets.businessinsider.com/news/currencies/block-bitcoin-mining-jack-dorsey-rig-crypto-open-anyone-buy-2022-1",
            "urlToImage": "https://images2.markets.businessinsider.com/61e16983c5e27c00185b8d80?format=jpeg",
            "publishedAt": "2022-01-14T12:34:09Z",
            "content": "Jack Dorsey onstage at a bitcoin convention in June.Joe Raedle/Getty Images\r\nBlock is going ahead with building a bitcoin mining system that will be open to individuals and businesses worldwide, its … [+2459 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Shoshana Wodinsky",
            "title": "Crypto Dev Says He’s Spending $500,000 on a Statue of Elon Musk’s Head on a Goat’s Body",
            "description": "Between Bitcoin-themed superspreader events and cringey branded NFT’s, those within the crypto community have set a high bar for devising the worst ways to hawk their currency of choice. But this week, the creators of an Elon Musk-themed cryptocurrency dubbed…",
            "url": "https://gizmodo.com/crypto-dev-says-he-s-spending-500-000-on-a-statue-of-e-1848321336",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/747f9809de270cde233f59fd229fd8c4.png",
            "publishedAt": "2022-01-07T19:30:00Z",
            "content": "Between Bitcoin-themed superspreader events and cringey branded NFTs, those within the crypto community have set a high bar for devising the worst ways to hawk their currency of choice. But this week… [+3034 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin falls 6.1 percent to $47607 - Reuters",
            "description": "Bitcoin dropped 6.13% to $47,606.92 on Tuesday, losing $3,111.19 from its previous close.",
            "url": "https://www.reuters.com/business/bitcoin-falls-61-percent-47607-2021-12-28/",
            "urlToImage": "https://www.reuters.com/resizer/w4pjI5JlvB_pshqV4hN-uthyRYY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3W3WSPQ3C5KVRAWJI2YIQPE72Y.jpg",
            "publishedAt": "2021-12-28T22:10:00Z",
            "content": "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken October 19, 2021. REUTERS/Edgar SuDec 28 (Reuters) - Bitcoin dropped 6.13% to $47,606.92 on Tuesday, … [+473 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin slumps to lowest since September - Reuters",
            "description": "Bitcoin  on Friday slumped as much as 5% to its lowest since late September, tumbling under $41,000 amid a broader sell-off for cryptocurrencies.",
            "url": "https://www.reuters.com/markets/stocks/bitcoin-slumps-lowest-since-september-2022-01-07/",
            "urlToImage": "https://www.reuters.com/resizer/bnf5uX3QzriNXncsDw8oUDcwuoc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YAQWJZANPFO3FEZURXTUSOSENA.jpg",
            "publishedAt": "2022-01-07T08:03:00Z",
            "content": "LONDON, Jan 7 (Reuters) - Bitcoin on Friday slumped as much as 5% to its lowest since late September, tumbling under $41,000 amid a broader sell-off for cryptocurrencies.\r\nBitcoin was last down 3.7% … [+1419 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BNNBloomberg.ca"
            },
            "author": "Bloomberg News",
            "title": "Bitcoin death cross is staring down bulls after a painful retreat - BNN",
            "description": "<ol><li>Bitcoin death cross is staring down bulls after a painful retreat  BNN\r\n</li><li>Crypto investors buy the dip as Bitcoin falls below $40000  Kitco NEWS\r\n</li><li>Where Is Bitcoin Heading Next After Falling Below $40,000 Today?  Forbes\r\n</li><li>Bitcoi…",
            "url": "http://www.bnnbloomberg.ca/bitcoin-death-cross-is-staring-down-bulls-after-a-painful-retreat-1.1705998",
            "urlToImage": "http://www.bnnbloomberg.ca/polopoly_fs/1.1706002!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/bitcoin.jpg",
            "publishedAt": "2022-01-11T14:54:48Z",
            "content": "After one of roughest patches ever for Bitcoin enthusiasts, holders of the largest digital currency are facing an ominous technical price pattern with a name that suggests more pain ahead. \r\nKnown as… [+3529 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin falls under $40000 to a 5-month low - Reuters",
            "description": "Bitcoin  fell over 5% on Monday to its lowest in over five months, tumbling under the $40,000 level.",
            "url": "https://www.reuters.com/technology/bitcoin-falls-under-40000-5-month-low-2022-01-10/",
            "urlToImage": "https://www.reuters.com/resizer/yVIwUJXK5d4zrW8OrXxf8x9-F_4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5E6IUHSNIJNVRGSYQGA3Z6TXNY.jpg",
            "publishedAt": "2022-01-10T14:40:00Z",
            "content": "A representation of the virtual cryptocurrency Bitcoin is seen in this picture illustration taken October 19, 2021. REUTERS/Edgar SuLONDON, Jan 10 (Reuters) - Bitcoin fell over 5% on Monday to its lo… [+384 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "BUZZ Crypto stocks slip as bitcoin briefly slides below $40000 - Reuters",
            "description": "** Shares of cryptocurrency and blockchain-related firms fall after bitcoin  briefly slides below $40,000 to a 5-month low",
            "url": "https://www.reuters.com/markets/asia/buzz-crypto-stocks-slip-bitcoin-briefly-slides-below-40000-2022-01-10/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=66",
            "publishedAt": "2022-01-10T15:31:00Z",
            "content": "** Shares of cryptocurrency and blockchain-related firms fall after bitcoin briefly slides below $40,000 to a 5-month low\r\n** The world's largest digital asset was last down 2.6% at $40,800 after fal… [+1132 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Andy Greenberg",
            "title": "Signal's Cryptocurrency Feature Has Gone Worldwide",
            "description": "A beta “payments” feature now lets some users of the popular encrypted messaging app send MobileCoin around the globe.",
            "url": "https://www.wired.com/story/signal-mobilecoin-cryptocurrency-payments/",
            "urlToImage": "https://media.wired.com/photos/61d5ff2d6e5c92e00969e6ec/191:100/w_1280,c_limit/security-signal.jpg",
            "publishedAt": "2022-01-06T16:00:06Z",
            "content": "In the spring of 2021, the encrypted communications app Signal announced that it would add a payments feature in beta for its users in the UK, testing out an integration with a relatively new, privac… [+3409 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hrobertson@businessinsider.com (Harry Robertson)",
            "title": "Anthony Scaramucci says he's not buying the dip in bitcoin as he expects more 'sloppiness' and volatility",
            "description": "The bitcoin price is likely to consolidate for a while, SkyBridge Capital CEO Anthony Scaramucci said.",
            "url": "https://markets.businessinsider.com/news/currencies/anthony-scaramucci-skybridge-investor-bitcoin-price-outlook-dip-volatility-2022-1",
            "urlToImage": "https://images2.markets.businessinsider.com/61e15623c5e27c00185b8b85?format=jpeg",
            "publishedAt": "2022-01-14T11:22:37Z",
            "content": "Former Trump White House communications director Anthony Scaramucci is a big bitcoin investor.AP Photo/Pablo Martinez Monsivais, File\r\nSkyBridge Capital CEO Anthony Scaramucci has said he's not buyin… [+2391 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Spain sets new rules for influencers who promote cryptocurrency",
            "description": "Spain is establishing rules related to how influencers, their sponsors and others promote cryptocurrencies. Influencers and other advertisers with more than 100,000 followers in the country must notify the National Securities Market Commission (CNMV) at least…",
            "url": "https://www.engadget.com/spain-influencers-cryptocurrency-promotion-rules-advertising-172028187.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-08/920a5870-f891-11eb-89eb-471087e7869f",
            "publishedAt": "2022-01-18T03:18:28Z",
            "content": "Spain is establishing rules related to how influencers, their sponsors and others promote cryptocurrencies. Influencers and other advertisers with more than 100,000 followers in the country must noti… [+1568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Wikipedia Faces Pressure To Stop Accepting Crypto Donations on Environmental Grounds",
            "description": "Wikimedia, the non-profit foundation that runs Wikipedia, is facing internal opposition to its policy of accepting cryptocurrency as a form of donation, primarily for environmental reasons. From a report: A proposal to the foundation from contributor Molly Wh…",
            "url": "https://news.slashdot.org/story/22/01/12/1810251/wikipedia-faces-pressure-to-stop-accepting-crypto-donations-on-environmental-grounds",
            "urlToImage": "https://a.fsdn.com/sd/topics/wikipedia_64.png",
            "publishedAt": "2022-01-12T18:11:00Z",
            "content": "So a single person wrote a proposal and this is called “internal pressure”? This person has the title of “contributor” of which I know not how high ranking it is.\r\nI do wonder, however, what is the e… [+284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kitco NEWS"
            },
            "author": "http://www.facebook.com/kitconews",
            "title": "Crypto investors buy the dip as Bitcoin falls below $40000 - Kitco NEWS",
            "description": "<ol><li>Crypto investors buy the dip as Bitcoin falls below $40000  Kitco NEWS\r\n</li><li>Bitcoin is off to its worst annual start since the dawn of crypto  BNN\r\n</li><li>Where Is Bitcoin Heading Next After Falling Below $40,000 Today?  Forbes\r\n</li><li>Bitcoi…",
            "url": "https://www.kitco.com/news/2022-01-10/Crypto-investors-buy-the-dip-as-Bitcoin-falls-below-40-000.html",
            "urlToImage": "https://www.kitco.com/news/2022-01-10/images/bitcoin-2582593_640.jpg",
            "publishedAt": "2022-01-10T22:36:00Z",
            "content": "Welcome to Kitco News' 2022 outlook series. The new year will be filled with uncertainty as the Federal Reserve looks to pivot and tighten its monetary policies. At the same time, the inflation threa… [+2832 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hrobertson@businessinsider.com (Harry Robertson)",
            "title": "Bitcoin tumbles 8% and other cryptos crash as hawkish Fed minutes whack risky assets",
            "description": "The Fed could pull back its support even faster than expected, spelling trouble for risky assets like bitcoin.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-cryptocurrencies-ethereum-binance-cardano-fed-minutes-2022-1",
            "urlToImage": "https://images2.markets.businessinsider.com/61d6b64695f1b90018377426?format=jpeg",
            "publishedAt": "2022-01-06T09:53:24Z",
            "content": "Bitcoin slumped Wednesday and into Thursday.Jirapong Manustrong/Getty Images\r\nBitcoin was down more than 8% Thursday, and the cryptocurrency market was a sea of red, after minutes revealed the Federa… [+2331 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                    <div className="col-md-3 mx-3">
                        <Newsitem title="mt title" description="my descr" imageUrl="https://pixy.org/src/21/219269.jpg"/>
                    </div>
                    <div className="col-md-3 mx-3">
                        <Newsitem title="mt title" description="my descr"/>
                    </div>
                    <div className="col-md-3 mx-3">
                        <Newsitem title="mt title" description="my descr"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
