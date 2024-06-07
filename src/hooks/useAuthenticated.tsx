import { useQuery } from '@tanstack/react-query';
import { getUser } from '../queries/getUser';
import { getUserSchema } from '../schemas/getUserSchema';
import * as yup from 'yup';

type AuthenticationStatus = {
    user: yup.InferType<typeof getUserSchema> | undefined;
    isLoading: boolean;
    isError: boolean;
}

export const useAuthenticated = (): AuthenticationStatus => {
    const { data, isFetching, isError } = useQuery({ queryKey: ['user'], queryFn: getUser });

    return {
        user: data,
        isLoading: isFetching,
        isError: isError,
    };
};