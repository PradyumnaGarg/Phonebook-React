import { createContext, useState, useContext, useEffect } from 'react';
import {ScaleLoader, BarLoader, PuffLoader} from 'react-spinners';
import Loader from "react-loader-spinner";
import { css } from "@emotion/react";
import LoadingOverlay from 'react-loading-overlay';


const LoadingContext = createContext({
    loading: false,
    setLoading: null
});

export function LoadingProvider({children}) {
    const [loading, setLoading] = useState(false);
    const value = { loading, setLoading };
    const override = css`
    display: block;
    margin: auto;
    border-color: red;
    `;
    return <LoadingContext.Provider value={value}>
            <LoadingOverlay active={loading} spinner={<PuffLoader css={override} color={'#28ffb8'} />}>
                    {children}
            </LoadingOverlay>
           </LoadingContext.Provider>
}


export function useLoading() {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used with Loading Provider');
    }
    return context;
}
