export const getFakeData1 = () => {
  const data = []
  for (let index = 0; index < 100; index++) {
    data.push({
      id: index,
      firstName: `John${index}`
    })
  }
  return Promise.resolve().then(() => data)
}

export const getFakeData2 = () => {
  const data = []
  for (let index = 0; index < 100; index++) {
    data.push({
      id: index,
      lastName: `Doe${index}`
    })
  }
  return Promise.resolve().then(() => data)
}