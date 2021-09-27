import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/',
      },
      {
        label: 'Liquidity',
        href: '/',
      },
    ],
  },
  {
    label: 'MultiFarms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'MultiPools',
    icon: 'PoolIcon',
    href: '/nests',
  },
  {
    label:"MultiVaults",
    icon:'VaultsIcon',
    href:""
  },
  {
    label:"PriceCharts",
    icon:'BondsIcon',
    href:""
  },
  {
    label:"MultiCard",
    icon:'GroupsIcon',
    href:""
  },
  {
    label:"Audit",
    icon:'AuditIcon',
    href:""
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'About Us',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: '',
      },
      {
        label: 'CoinGecko',
        href: '',
      },
      {
        label: 'CoinMarketCap',
        href: '',
      },
      {
        label: 'AstroTools',
        href: '',
      },
    ],
  },
  {
    label: 'MORE',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Github',
      //   href: '',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://goosedefi.gitbook.io/goose-finance/',
      // },
      {
        label: 'Blog',
        href: '',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
