import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue2 from './CardValue2'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-repeat: no-repeat;
  background-size:100% 100%;
  padding:30px 0px;
  background-image:url('/images/Block3.png');
  min-height: 580px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
 // margin-bottom: 8px;
  padding-top: 1rem;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);

  let raPerBlock = 0;
  if(farms && farms[0] && farms[0].raPerBlock){
    raPerBlock = new BigNumber(farms[0].raPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledCakeStats>
      <CardBody style={{padding:"20px 60px 0px 60px"}}>
        <Heading size="xl" mb="24px" /* style={{textAlign:"center"}} */ >
          {TranslateString(534, 'PRV Stats')}
        </Heading>
        <div style={{paddingTop:"60px"}}>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue2 fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue2 fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue2 fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          <Text color="#FFFFFF">{cakeSupply && <CardValue2 fontSize="14px" value={cakeSupply} decimals={0} />} </Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New EGG/block')}</Text>
          <Text bold fontSize="14px" style={{color:"#FFFFFF"}}>{raPerBlock}</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(541, 'Max Supply')}</Text>
          <Text bold fontSize="14px" style={{color:"#FFFFFF"}}>{raPerBlock}</Text>
        </Row>
        </div>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
