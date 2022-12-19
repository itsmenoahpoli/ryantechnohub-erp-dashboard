export const getEnv = (key: string): string => {
  let envVariable = import.meta.env[`VITE_APP_${key}`]

  return envVariable
}