import React from 'react';
import { BarLoader } from 'react-spinners';
import { LoaderWrapper } from './styles';

interface ILoaderProps {
    isLoading: boolean;
    width: number;
    height: number;
    speedMultiplier: number;
}

const Loader = (props: ILoaderProps): JSX.Element => {
    const { isLoading, width, height, speedMultiplier } = props;

    return (
        <LoaderWrapper>
            <BarLoader
                color={'#162f46'}
                loading={isLoading}
                speedMultiplier={speedMultiplier}
                width={width}
                height={height}
            />
        </LoaderWrapper>
    );
};

export default React.memo(Loader);
