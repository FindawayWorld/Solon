import { useRouter } from 'next/router';

const Pokemon = () => {
    const router = useRouter();

    return JSON.stringify(router.query, null, 4);
};

export default Pokemon;
