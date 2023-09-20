import axiosClient from '../utils/axiosClient'

const getSong = async (id: string) => {
  try {
    const data = await axiosClient.get<any, any>('/song', {
      params: {
        id: id,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export { getSong }
