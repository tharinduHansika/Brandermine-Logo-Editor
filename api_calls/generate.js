import { httpGet } from ".";


export async function searchLogo({ query, industry, limit, skip }) {
    let ind = ''
    if (industry != 'undefined' && industry != undefined && industry != null && industry != '') {
        let ind_s = `${industry}`
        if (ind_s.includes(',')) {
            let ins = industry.split(',')
            for (const i of ins) {
                ind += `&industry=${i}`
            }
        } else {
            ind = `&industry=${industry}`
        }
        const resp = await httpGet(`/search/searchByPhrase?query=${query}&limit=${limit}&skip=${skip}${ind}`)
        return resp.data != null ? resp.data.result : []
    }
}
export async function getIndustries() {
    const resp = await httpGet(`/industries/list`)
    return resp.data != null ? resp.data : []
}