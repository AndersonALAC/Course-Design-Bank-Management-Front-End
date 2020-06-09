import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Bank Management'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
