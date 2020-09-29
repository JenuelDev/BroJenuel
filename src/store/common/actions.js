import { getPOSTS } from "../../constants/request";

export default {
    // asynchronouse
    async setBlogList(state) {
        const blogItems = await getPOSTS().then(result => {
            const items = result.data.items;
            state.commit('setBlogItems', items);
        }).catch(error => {
            console.log(error);
       });
    }
};