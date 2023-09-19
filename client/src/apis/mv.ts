import axiosClient from '../utils/axiosClient'

const getMV = async (id: string) => {
  try {
    const data = await axiosClient.get<any, any>('/video', {
      params: {
        id: id,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

const getlistMV = async (id: string, page: number, count: number) => {
  try {
    const data = await axiosClient.get<any, any>('/listmv', {
      params: {
        id: id,
        page: page,
        count: count,
      },
    })
    return data
  } catch (err) {
    console.log(err)
  }
}

export { getMV, getlistMV }
