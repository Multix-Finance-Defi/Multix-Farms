import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, Text, Flex } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  background-repeat: no-repeat;
 min-height: 550px;
  background-size:100% 100%;
 // padding:40px 0px;
  background-image:url('/images/Block1.png');
  background-color: !important;
`

const Block = styled.div`
//  margin-bottom: 16px;
`

const CardImage = styled.img`
 // margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.text};
  // background:url('images/textBg2.png');
  // padding:10px;
  // font-size: 22px;
  // font-weight:bold;
  // background-repeat:no-repeat;
`

const Actions = styled.div`
  width: 80%;
  
`;

const Head = styled.div`
 ${({ theme }) => theme.mediaQueries.mm}{
  padding: 1rem 1rem 0 0;
  color:  ${({ theme }) => theme.colors.text};
  font-size: 40px;
 }
  padding: 2rem 1rem 0 0;
  font-size: 30px;
  color:  ${({ theme }) => theme.colors.text};
  `;

const Style = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
// background: yellow;
 height: 20rem;  
 width: 100%;  
 justify-content: space-between;
`;


const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const eggPrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody style={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"550px"}}>
      <Style>
        <Head>
          {TranslateString(542, 'Farms & Staking')}
        </Head>
        {/* <img src="/images/x.png" alt="cake logo"/>  */}
        {/* <CardImage src="/images/egg/2.png" alt="cake logo" style={{width:"200px"}} /> */}
        <Flex style={{width:"85%",display:"flex",justifyContent:"space-between"}}>
          <Block>
            <Label >{TranslateString(544, 'PRV to Harvest')}</Label>
            <CakeHarvestBalance  earningsSum={earningsSum} />
            <Text style={{color:"#FFFFFF",paddingTop:"0.2rem"}}>~${(eggPrice * earningsSum).toFixed(2)}</Text>
          </Block>
          <Block >
            <Label >{TranslateString(546, 'PRV in Wallet')}</Label>
            <CakeWalletBalance cakeBalance={cakeBalance} />
            <Text style={{color:"#FFFFFF",paddingTop:"0.2rem"}}>~${(eggPrice * cakeBalance).toFixed(2)}</Text>
          </Block>
        </Flex>
        </Style>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"6rem"}}>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
              style={{ background: "linear-gradient(180deg, #00ECEC 0%, #6E318E 77.6%, #6E318E 100%)" }}
            >
              {pendingTx
                ? TranslateString(548, 'Collecting EGG')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
        </div>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
