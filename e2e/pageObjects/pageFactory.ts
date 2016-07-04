import {IHomePage} from './homepage.api';
import {HomePage} from './impl/homepage.po';

export class PageFactory {
    static homepage(): IHomePage {
        return new HomePage();
    }
}
