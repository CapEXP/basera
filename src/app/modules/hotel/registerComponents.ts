import { Type } from '@angular/core';

/** import custom component */
import { Home } from '../../pages/home';
import { TopBanner } from '../../customComponents/topBanner';

/** 
    import "sharedComponents" and "layoutBuilder" from @cgex
    // "@cgex/coreComponents": "./coreComponents",
    // "@cgex/layoutBuilder": "./layoutBuilder",
    yarn install will  publish shared components in node modules with "sharedComponents" and "layoutBuilder"
 */

// import { MultiDropDown } from '@cgex/coreComponents/MultiDropDown';
// import { Page } from '@cgex/layoutBuilder/Page'

import { MultiDropDown } from '../../../coreComponents/MultiDropDown';
import { Page } from '../../../layoutBuilder/Page'

export const decls: (any[] | Type<any>)[] = [
    Home,
    TopBanner,
    MultiDropDown,
    Page
]

export const bsComp =  Home