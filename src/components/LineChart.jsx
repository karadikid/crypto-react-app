import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;


const LineChart = ({coinHistory, currentPrice, coinName}) => {

// console.log(coinHistory?.data?.change);
  
return (
    <>
        <Row className='chart-header'>
            <Title className='chart-title' level={2}>{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title className='price-change' level={5}>{coinHistory?.data?.change}%</Title>
                <Title className='current-price' level={5}>Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
    </>
  )
}

export default LineChart