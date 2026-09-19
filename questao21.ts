function ePrimo(n: number): boolean {
  if (!Number.isInteger(n) || n <= 1) {
    return false;
  }

  const limite = Math.sqrt(n);

  for (let i = 2; i <= limite; i++) {
    if (n % i === 0) {
      return false; 
    }
  }

  return true;
}

const numerosQ21 = [2, 7, 12, 29, 35, 97];

numerosQ21.forEach((num) => {
  console.log(`O número ${num} é primo? -> ${ePrimo(num)}`);
});
