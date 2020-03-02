import axios from 'axios';
import useSWR from 'swr';

const fetcher = async (path) => {
    const response = await axios(path);
    return response.data;
}

const about = () => {
    const { data, error } = useSWR('/api/repositories', fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
        <div>
            Projects page {data[0].name}
        </div>
    )
}

export default about
