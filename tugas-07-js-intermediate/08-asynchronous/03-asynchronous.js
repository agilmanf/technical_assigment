// Soal 3 /////////////////////////////////////////////
const getGitHubUser = (str) => {
  return new Promise((resolve, reject) => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((result) => {
        if (str == "") {
          reject(null);
        } else {
          result.forEach((r) => {
            if (r.login == str) resolve(r);
            else reject("not found");
          });
        }
      });
  });
};

const printGitHubUser = async () => {
  try {
    const mojombo = await getGitHubUser("mojombo");
    console.log(mojombo);
  } catch (error) {
    console.log(error);
  }

  try {
    const orange = await getGitHubUser("");
    console.log(orange);
  } catch (error) {
    console.log(error);
  }

  try {
    const rudiTabuti = await getGitHubUser("rudi.tabuti");
    console.log(rudiTabuti);
  } catch (error) {
    console.log(error);
  }
};

printGitHubUser();
