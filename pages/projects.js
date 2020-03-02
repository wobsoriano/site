import { useEffect } from 'react';
// import axios from 'axios';

const about = () => {
    
    // useEffect(() => {
    //     const getProjects = async () => {
    //         try {
    //             const response = await axios({
    //                 url: 'https://api.github.com/graphql',
    //                 method: 'post',
    //                 headers: {
    //                     Authorization: `Bearer ${process.env.NEXT_SERVER_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    //                 },
    //                 data: {
    //                     query: GET_REPOSITORIES,
    //                 },
    //             });
    //             console.log(response.data);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }

    //     getProjects();
    // }, []);

    return (
        <div>
            Projects page
        </div>
    )
}

export default about
