import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from "./index.module.scss";

const CardList = () => {
    const cardData = [
        {
            coin: [
                { img: '/images/pancakeswap.svg', name: 'Pancakeswap' },
                { img: '/images/babyswap.svg', name: 'Babyswap' }
            ],
            amount: '$ 180',
            time: '03/06/2024, 17:15:32',
            tokens: [
                { img: '/images/USDT-icon.svg', name: 'USDT' },
                { img: '/images/bnb.svg', name: 'BNB' }
            ],
            details: {
                isch: '2.2267',
                winnings: '3.96'
            }
        },
        {
            coin: [
                { img: '/images/pancakeswap.svg', name: 'Pancakeswap' },
                { img: '/images/babyswap.svg', name: 'Babyswap' }
            ],
            amount: '$ 2327',
            time: '03/06/2024, 17:15:32',
            tokens: [
                { img: '/images/mange.svg', name: 'Manga' },
                { img: '/images/bnb.svg', name: 'BNB' }
            ],
            details: {
                isch: '4.1845',
                winnings: '97.3733'
            }
        },
        {
            coin: [
                { img: '/images/babyswap.svg', name: 'Babyswap' },
                { img: '/images/pancakeswap.svg', name: 'Pancakeswap' }
            ],
            amount: '$ 516',
            time: '03/06/2024, 17:16:47',
            tokens: [
                { img: '/images/arbitrum.svg', name: 'ARBITRUM' },
                { img: '/images/usdc.svg', name: 'USDC' }
            ],
            details: {
                isch: '3.5943',
                winnings: '18.5466'
            }
        },
        {
            coin: [
                { img: '/images/pancakeswap.svg', name: 'Pancakeswap' },
                { img: '/images/babyswap.svg', name: 'Babyswap' }
            ],
            amount: '$ 12736',
            time: '03/06/2024, 17:15:32',
            tokens: [
                { img: '/images/baby-icon.svg', name: 'BABY' },
                { img: '/images/bnb.svg', name: 'BNB' }
            ],
            details: {
                isch: '2.8695',
                winnings: '365.4595'
            }
        },
    ];

    return (
        <section>
            <Container>
                <Row className='align-items-stretch'>
                    {cardData.map((card, index) => (
                        <Col lg={3} md={6} key={index} className='h-100 mb-lg-0 mb-3'>
                            <div className={`h-100 ${classes.card}`}>
                                <div className={classes.coin}>
                                    {card.coin.map((c, idx) => (
                                        <div key={idx}>
                                            <img src={c.img} alt={c.name} /> {c.name}
                                        </div>
                                    ))}
                                </div>
                                <div className={classes.amount}>
                                    <span>{card.amount}</span>
                                    <small className={classes.time}>{card.time}</small>
                                </div>
                                <div className={classes.tokens}>
                                    <img style={{ width: '12px', height: '12px' }} src='/images/angle-left.svg' alt="angle-left" />
                                    {card.tokens.map((token, idx) => (
                                        <span key={idx}>
                                            <img src={token.img} alt={token.name} /> {token.name}
                                            {idx < card.tokens.length - 1 && "   / "}
                                        </span>
                                    ))}
                                </div>
                                <div className={classes.details}>
                                    <div className={classes.detailItem}>ISCH: {card.details.isch}</div>
                                    <div className={classes.detailItem}>Winnings: {card.details.winnings}</div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CardList;
