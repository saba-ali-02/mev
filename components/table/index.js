import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { BiExport } from "react-icons/bi";

const Table = () => {
    const [amountFilter, setAmountFilter] = useState('');
    const [winningsFilter, setWinningsFilter] = useState('');

    const handleAmountFilter = (e) => {
        setAmountFilter(e.target.value);
    };

    const handleWinningsFilter = (e) => {
        setWinningsFilter(e.target.value);
    };

    const handleExport = () => {        
    };

    const columns = [
        {
            name: 'Sr. No',
            selector: row => row.srNo,
        },
        {
            name: 'Time',
            selector: row => row.time,

        },
        {
            name: 'Amount($)',
            selector: row => row.amount,
        },
        {
            name: 'Dex 1',
            selector: row => row.dex1,
            cell: row => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.dex1Icon} alt="" style={{ width: 20, marginRight: 8 }} />
                    {row.dex1}
                </div>
            ),
        },
        {
            name: 'Dex 2',
            selector: row => row.dex2,
            cell: row => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.dex2Icon} alt="" style={{ width: 20, marginRight: 8 }} />
                    {row.dex2}
                </div>
            ),
        },
        {
            name: 'Pair',
            selector: row => row.pair,
            sortable: true,
            cell: row => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.pair[0].icon} alt="" style={{ width: 20, marginRight: 8, marginLeft: 8, }} />
                    {row.pair[0].symbol}
                    <img src={row.pair[1].icon} alt="" style={{ width: 20, marginLeft: 8, marginRight: 8 }} />
                    {row.pair[1].symbol}
                </div>
            ),
        },
        {
            name: '% ISCH',
            selector: row => row.percentage,
        },
        {
            name: 'Winnings',
            selector: row => row.winnings,
        },
    ];

    const data = [
        {
            srNo: 1,
            time: '03/06/2024, 17:15:32',
            amount: '$180',
            dex1: 'Pancakeswap',
            dex1Icon: '/images/pancakeswap.svg',
            dex2: 'Babyswap',
            dex2Icon: '/images/babyswap.svg',
            pair: [{ symbol: 'USDT', icon: '/images/USDT-icon.svg' }, { symbol: 'BNB', icon: '/images/bnb.svg' }],
            percentage: 2.2267,
            winnings: 3.96,
        },
        {
            srNo: 2,
            time: '03/06/2024, 17:15:57',
            amount: '$2327',
            dex1: 'Pancakeswap',
            dex1Icon: '/images/pancakeswap.svg',
            dex2: 'Babyswap',
            dex2Icon: '/images/babyswap.svg',
            pair: [{ symbol: 'Manga', icon: '/images/mange.svg' }, { symbol: 'BNB', icon: '/images/bnb.svg' }],
            percentage: 4.1845,
            winnings: 97.3733,
        },
        {
            srNo: 3,
            time: '03/06/2024, 17:16:47',
            amount: '$516',
            dex1: 'babyswap',
            dex1Icon: '/images/babyswap.svg',
            dex2: 'Pancakeswap',
            dex2Icon: '/images/Pancakeswap.svg',
            pair: [{ symbol: 'ARBITRUM', icon: '/images/arbitrum.svg' }, { symbol: 'USDC', icon: '/images/usdc.svg' }],
            percentage: 3.5943,
            winnings: 18.5466,
        },
        {
            srNo: 4,
            time: '03/06/2024, 17:18:32',
            amount: '$12736',
            dex1: 'Pancakeswap',
            dex1Icon: '/images/pancakeswap.svg',
            dex2: 'Babyswap',
            dex2Icon: '/images/babyswap.svg',
            pair: [{ symbol: 'BABY', icon: '/images/baby-icon.svg' }, { symbol: 'BNB', icon: '/images/bnb.svg' }],
            percentage: 2.8695,
            winnings: 365.4595,
        },
    ];

    const filteredData = data.filter(item =>
        item.amount.toLowerCase().includes(amountFilter.toLowerCase()) &&
        String(item.winnings).toLowerCase().includes(winningsFilter.toLowerCase())
    );
    
    return (
        <section className='p-0'>
            <Container>
                <div className='table table-responsive'>
                    <div className='filterBox'>
                        <div>
                            <input
                                type="text"
                                placeholder="Amount"
                                value={amountFilter}
                                onChange={handleAmountFilter}
                                className='filter'
                            />
                            <input
                                type="text"
                                placeholder="Winnings"
                                value={winningsFilter}
                                onChange={handleWinningsFilter}
                                className='filter'
                            />
                        </div>
                        <Button onClick={handleExport}> <BiExport />Export</Button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={filteredData}
                    />
                </div>
            </Container>
        </section>
    )
}

export default Table

