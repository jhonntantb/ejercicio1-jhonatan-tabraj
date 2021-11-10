export const getFakeData1 = () => {
  const data = []
  for (let index = 0; index < 100; index++) {
    data.push({
      id: index,
      firstName: `John${index}`
    })
  }
  return Promise.resolve().then(() => shuffle(data))
}

export const getFakeData2 = () => {
  const data = []
  for (let index = 0; index < 100; index++) {
    data.push({
      id: index,
      lastName: `Doe${index}`
    })
  }
  return Promise.resolve().then(() => shuffle(data))
}

const shuffle = array => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}
