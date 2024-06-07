type Env = {
    CC_API: string;
}

export const getEnv = (): Env => {
    return {
        CC_API: process.env.REACT_APP_CC_API || '',
    };
}