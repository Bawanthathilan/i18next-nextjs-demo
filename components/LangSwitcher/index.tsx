import React from 'react';
import { useRouter } from 'next/router';


const LangSwitcher = () => {
    const router = useRouter();

    const changeLocale = (locale: any) => {
        router.push(router.pathname, router.asPath, { locale });
    };

    return (
        <div className='flex gap-5'>
            <button onClick={() => changeLocale('en')}>English</button>
            <button onClick={() => changeLocale('he')}>Hebrew</button>

        </div>
    );
};

export default LangSwitcher;
