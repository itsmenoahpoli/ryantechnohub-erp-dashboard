export type ICredentials = {
  email: string
  password: string
}

export type ILoginFormProps = {
  loading: boolean
  onFormSubmit: (credentials: ICredentials) => void
}

export type ILoginResponse = {

}