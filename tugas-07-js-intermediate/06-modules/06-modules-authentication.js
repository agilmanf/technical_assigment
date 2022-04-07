export default function validateLoginData(email, password) {
  const usernameValidator = /^[^<>()[\]\\.,;:\s@\"]\w+@\w+\.(com|co\.id|net|org)/gi;
  const passwordValidator = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=:\\\/;'"?.>,<`~[{}\]]).{8,}/;

  const validEmail = usernameValidator.test(email);
  const validPw = passwordValidator.test(password);

  if (!validEmail) return "tolong masukan email yang valid";
  else if (validEmail && !validPw) return "tolong masukan password sesuai ketentuan";
  else return "Welcome to The Jungle";
}
