import { styled } from '@mui/system';
import Head from 'next/head';
import React from 'react';
// import bg from '../../public/images/bg.jpg';
interface accountProps {}

export const Account: React.FC<accountProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Super Devmike - Admin Account!</title>
        <meta
          content='minimum-scale=1, initial-scale=1, width=device-width'
          name='viewport'
        />
        <meta name='description' content='super devmike admin account page' />
      </Head>
      <AccountWrapper>hello and welcome</AccountWrapper>
    </>
  );
};

const AccountWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(../../public/images/bg.jpg)`,
  height: 'calc(100vh - 5rem)!important',
  width: '100vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',

}));
export default Account;
