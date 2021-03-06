/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as Container} from './Container'
export {default as Game} from './Game'
export {default as Games} from './Games'
export {default as SearchResults} from './SearchResults'
export {default as Welcome} from './Welcome'
export {default as Cart} from './Cart'
export {default as CartItem} from './Cart-item'
export {default as ThankYou} from './ThankYou'
export {default as UserProfile} from './UserProfile'
export {default as Routes} from '../../client/routes'
