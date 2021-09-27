import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'
import CardValue2 from './CardValue2'

const StyledTotalValueLockedCard = styled(Card)`
  display: flex;
  flex: 1;
  justify-content: center;
  background-size:100% 100%;
  padding: 80px 0px;
 // background-image:url('/images/16.png');
  background-image:url('/images/Block4.png');
  background-color: !important;
  z-index: 1;
  height: 430px;
  ${({ theme }) => theme.mediaQueries.sm}{
    padding-left: 0px;
  }
  padding-left: 20px;
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody >
        <Heading size="xl" mb="24px">
        Total Value Locked (TVL)
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            <CardValue2 value={totalValue.toNumber()} prefix="$" decimals={2}/>
          {/* </Heading> */}
          <Text>Across All Farms & Pools</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
