import { flightItems, charterItems, travelItems } from './asideItems'

import plane from '@/assets/img/support/plane.png'
import planeX2 from '@/assets/img/support/plane@2x.png'

import flightBanner from '@/assets/img/support/top-bg.jpg'
import travelBanner from '@/assets/img/travel-agency/top-bg.jpg'
import charterBanner from '@/assets/img/character-flight/top-bg.jpg'

export const flightData = {
  img: plane,
  imgX2: planeX2,
  bannerImg: flightBanner,
  pageTitle: 'Flight support service',
  pageDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  servicesItems: flightItems,
  serviceActiveIndex: 1,
}

export const travelData = {
  bannerImg: travelBanner,
  pageTitle: 'Travel agency',
  pageDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  servicesItems: travelItems,
  serviceActiveIndex: 1,
}

export const charterData = {
  bannerImg: charterBanner,
  pageTitle: 'Charter flights',
  pageDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  servicesItems: charterItems,
  serviceActiveIndex: 1,
}
