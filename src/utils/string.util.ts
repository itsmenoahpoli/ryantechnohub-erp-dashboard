import initials from "initialism"

export const getInitials = (name: string): string => {
  return initials(name)
}

export const capitalize = (string: string): string => {
  return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}