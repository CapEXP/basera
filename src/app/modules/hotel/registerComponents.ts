import { Type } from '@angular/core';

/** import custom component */
import { Home } from '../../pages/home';
import { TopBanner } from '../../customComponents/topBanner';

/** 
    import shared component here, and run npm install after registering in this file
    yarn install will  publish shared components in node modules with "sharedComponents"
 */
import { MultiDropDown } from 'coreComponents/MultiDropDown';

export const decls: (any[] | Type<any>)[] = [
    Home,
    TopBanner,
    MultiDropDown
]

export const bsComp =  Home