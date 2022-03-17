import axios from "axios"
import Cookies from "js-cookie";
import {API} from '~/config/variables'
export const toggle = (product) => {
    axios.get(`${API}/bookmarks/toggle?product=${product}`,{
        headers: {
            'Authorization': `${Cookies.get("token")}`
        }
    }).then((res) => {
        console.log(res);
    }).catch((err) => console.log(err))
}