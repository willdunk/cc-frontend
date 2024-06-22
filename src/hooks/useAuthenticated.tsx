import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries/getUser';
import { getUserSchema } from '../schemas/getUserSchema';
import * as yup from 'yup';

type AuthenticationStatus = {
    user: yup.InferType<typeof getUserSchema> | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const useAuthenticated = (enabled?: boolean): AuthenticationStatus => {
    const { data, isFetching, isError } = useQuery({
        queryKey: ['autheticatedUser'],
        queryFn: getUser,
        enabled,
    });

    return {
        user: data,
        isLoading: isFetching,
        isError: isError,
    };
};
