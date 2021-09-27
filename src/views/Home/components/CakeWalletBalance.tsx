import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWalletBalance = ({ cakeBalance }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="failure" style={{ lineHeight: '2px',paddingTop:"1rem", fontSize:"20px",backgroundImage: "url('/images/textBg1.png')", backgroundRepeat:"no-repeat"}}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={cakeBalance} fontSize="20px"/>
}

export default CakeWalletBalance
