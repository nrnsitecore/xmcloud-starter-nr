// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as select from 'src/components/ui/select';
import * as popover from 'src/components/ui/popover';
import * as input from 'src/components/ui/input';
import * as card from 'src/components/ui/card';
import * as calendar from 'src/components/ui/calendar';
import * as button from 'src/components/ui/button';
import * as badge from 'src/components/ui/badge';
import * as FlightPicker from 'src/components/pickers/FlightPicker';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as SkywingsServices from 'src/components/page-content/SkywingsServices';
import * as SkywingsFleet from 'src/components/page-content/SkywingsFleet';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as PopularDestinations from 'src/components/destinations/PopularDestinations';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['select', select],
  ['popover', popover],
  ['input', input],
  ['card', card],
  ['calendar', calendar],
  ['button', button],
  ['badge', badge],
  ['FlightPicker', FlightPicker],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['SkywingsServices', SkywingsServices],
  ['SkywingsFleet', SkywingsFleet],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['PopularDestinations', PopularDestinations],
]);

export default componentMap;
