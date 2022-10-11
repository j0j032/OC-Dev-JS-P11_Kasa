import axios from 'axios'

export const getLodging = async (url, filter) => await axios.get(url).then(r => filter ? r.data[filter.method](filter.callback) : r.data)
