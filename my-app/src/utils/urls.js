const BASE_URL = 'https://helsinki-citybikes-endpoints.herokuapp.com'

export const API_URL = (slug) => `${BASE_URL}/${slug}`
export const STARTS_URL = (id)=> `${BASE_URL}/startjourneys/${id}`
export const END_URL = (id)=> `${BASE_URL}/endjourneys/${id}`