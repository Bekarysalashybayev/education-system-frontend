export type authRequestType = {
  iin: string,
  password: string
}

export type authResponseType = {
  username: string,
  first_name: string
  last_name: string
}