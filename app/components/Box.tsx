import React, { FC } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const Box: FC<BoxProps> = ({ children, className }) => {
    return (
        <div className={`${className} h-20 flex justify-center items-center `}>
            {children}
        </div>
    )
}

export default Box;