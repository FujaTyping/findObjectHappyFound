"use client";

import { App, Block, Button } from 'konsta/react';
import React from 'react';
import Hpf from './components/animated/hpf';
import YW from '@/assets/Yorwor.webp';

function Content() {
    return (
        <>
            <App theme='ios' className='flex items-center justify-center flex-col max-w-7xl mx-auto' >
                <Block className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-22 w-full'>
                    <Block className='mx-auto flex flex-col items-center justify-center'>
                        <Hpf />
                    </Block>
                    <div className='order-first md:order-last flex items-center justify-center flex-col w-full'>
                        <Block strong className='rounded-xl space-y-5 h-fit w-full'>
                            <div className='text-center space-y-2 flex items-center justify-center flex-col'>
                                <img src={YW.src} alt="Icon" className='w-18' />
                                <h1 className='font-semibold text-3xl'>เข้าสู่ระบบ</h1>
                                <p>ระบบของหายได้คืนที่จะคืนความสุขให้คุณ</p>
                            </div>
                            <div className='space-y-1'>
                                <Button>เข้าสู่ระบบ</Button>
                                <h2 className='text-center text-gray-500'>ล็อกอินด้วยบัญชี @hatyaiwit.ac.th</h2>
                            </div>
                        </Block>
                    </div>
                </Block>
                <p className='text-white font-semibold'>เวอร์ชั่น 1.0.0</p>
            </App>
        </>
    )
}

export default Content