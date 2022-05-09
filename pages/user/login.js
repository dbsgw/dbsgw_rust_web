export function RustGitee() {

  var ClientID = null
  var RedirectUrl = null
  if (process.env.NODE_ENV == "development") {
    ClientID = "eb30f085980d8fea35284e6923a4c9213393c27172ce1a00df7ca0a88d7de9dd"
    RedirectUrl = "http://127.0.0.1:2000/user/gitee"
  } else {
    ClientID = "cd1e469a5d766eebc622efe9c9e8331be9924211bfd7dcf8fe9f64e7064cb1ab"
    RedirectUrl = "https://rust.nuzn.cn/user/gitee"
  }

  return `https://gitee.com/oauth/authorize?client_id=${ClientID}&redirect_uri=${RedirectUrl}&response_type=code`
}

export function RustGitHup() {
  var ClientID = null
  var RedirectUrl = null
  if (process.env.NODE_ENV == "development") {
    ClientID = "Iv1.dc98f2add2e3f1cc"
    RedirectUrl = "http://127.0.0.1:2000/user/githup"
  } else {
    ClientID = "Iv1.15a5fc34a11b4e70"
    RedirectUrl = "https://rust.nuzn.cn/user/githup"
  }


  // process.env.NODE_ENV == "development"
  return `https://github.com/login/oauth/authorize?client_id=${ClientID}&redirect_uri=${RedirectUrl}`
}
