import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  background-size:100% 100%;
//  padding:40px 0px;
//  background-image:url('/images/16.png');
  background-image:url('/images/Block2.png');
  background-color: !important;
  min-height: 550px;
`

const Row = styled.div`
  // align-items: center;
  // display: flex;
  // font-size: 14px;
  // justify-content: space-between;
  // margin-bottom: 8px;
`
const Head = styled.div`
  ${({ theme }) => theme.mediaQueries.mm}{
     font-size: 40px;
     padding: 1.5rem 0 0 2rem;
   }
   font-size:  30px;
   color: #00ECEC;
   padding: 1.5rem 0 0 1rem;
  `;


const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Head>
          Announcements
        </Head>  
        <div style={{paddingTop:"25px"}}>  
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'dev'
          }}
          options={{
            height: '320',
            chrome: "noheader, nofooter",
            width: "100%"
          }}
        />
       </div>  
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
