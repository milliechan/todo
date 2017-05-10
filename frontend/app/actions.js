export const SHOW_KEBAB = 'SHOW_KEBAB'
export const HIDE_KEBAB = 'HIDE_KEBAB'

export function showKebab() {
  return {
    type: SHOW_KEBAB
  }
}

export function hideKebab() {
  return {
    type: HIDE_KEBAB
  }
}
