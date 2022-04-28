export function RustGitee() {
  let ClientID = "eb30f085980d8fea35284e6923a4c9213393c27172ce1a00df7ca0a88d7de9dd"
  let RedirectUrl = "http://127.0.0.1:2000/user/gitee"
  return `https://gitee.com/oauth/authorize?client_id=${ClientID}&redirect_uri=${RedirectUrl}&response_type=code`
}
export function RustGitHup() {
  let ClientID = "Iv1.dc98f2add2e3f1cc"
  let RedirectUrl = "http://127.0.0.1:2000/user/githup"
  return `https://github.com/login/oauth/authorize?client_id=${ClientID}&redirect_uri=${RedirectUrl}`
}
