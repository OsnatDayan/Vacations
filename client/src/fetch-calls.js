

const buildVacatinBody = (desc, dest, pic, start, end, price) => {
    let obj = {
        descriprion: desc,
        destination: dest,
        picture: pic,
        start_date: start,
        end_date: end,
        price: price
    };
    return obj;
}
const methods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
};
const END_POINTS = {
    getVacation: '/api/vacation',
    addVacation: '/api/vacation/add',
    follow: '/api/vacation/FOLLOW',
    unfolowo: '/api/vacation/UNFOLLOW',
    updataVacation: '/api/vacation/update',
    deleteVacation: '/api/vacation/delete',
    login: '/api/auth/login',
    register: '/api/auth/register',
    retport: '/api/vacation/report',
    getUserVacations: '/api/vacation/followedVacations'
}
const fetchWithData = (endPoint, method, data) => {
    return fetch(endPoint, {
        'method': method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
const fetchWithoutData = (endPoint, method) => {
    return fetch(endPoint, {
        'method': method,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        },
    }).then(res => res.json());
}
const login = (data) => {
    return fetch(END_POINTS.login, {
        'method': methods.POST,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

const register = (data) => {
    return fetch(END_POINTS.register, {
        'method': methods.POST,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(res => res.json());

}
const getToken = () => sessionStorage.getItem('token');



export const actions = {
    END_POINTS,
    methods,
    buildVacatinBody,
    fetchWithData,
    fetchWithoutData,
    login,
    register,
    getToken

}