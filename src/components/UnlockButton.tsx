import React from 'react'
import { Button, useWalletModal, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{background: "linear-gradient(180deg, #00ECEC 0%, #6E318E 77.6%, #6E318E 100%)"}}>
     <Text style={{color:"#FFFFFF", fontSize:"1.5em"}}>
     {TranslateString(292, 'Unlock Wallet')}
     </Text>
    </Button>
  )
}

export default UnlockButton
