import { NextApiRequest,NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Diego'},
        { id: 1, name: 'Alice'},
        { id: 1, name: 'Marlene'},
    ]

    return response.json(users);
}

// 