const isR18Plus = (age) => {
  return new Promise((resolve, reject) => {
    if (age > 18) resolve("anda sudah dewasa");
    else reject("anda masih dibawah umur");
  });
};
const printR18Plus = async () => {
  // try {
  //     const underAge = await isR18Plus(10);
  //     console.log(underAge);
  // } catch (error) {
  //     console.log(error);
  // }

  // try {
  //     const properAge = await isR18Plus(19);
  //     console.log(properAge);
  // } catch (error) {
  //     console.log(error);
  // }

  const underAge = await isR18Plus(10).catch((e) => e);
  const properAge = await isR18Plus(19).catch((e) => e);

  console.log(underAge);
  console.info(properAge);
};

printR18Plus();