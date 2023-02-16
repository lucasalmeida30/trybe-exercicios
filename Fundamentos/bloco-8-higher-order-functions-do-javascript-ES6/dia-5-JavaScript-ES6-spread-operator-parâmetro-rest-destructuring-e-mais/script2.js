const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr)
}

console.log(sum(4, 5, 6, 10, 35))