// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as sheet from 'src/components/ui/sheet';
import * as select from 'src/components/ui/select';
import * as input from 'src/components/ui/input';
import * as card from 'src/components/ui/card';
import * as button from 'src/components/ui/button';
import * as badge from 'src/components/ui/badge';
import * as ToolsSelector from 'src/components/tools/ToolsSelector';
import * as ServicesOverview from 'src/components/services/ServicesOverview';
import * as Tracking from 'src/components/search/Tracking';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Testimonials from 'src/components/pagecontent/Testimonials';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['sheet', sheet],
  ['select', select],
  ['input', input],
  ['card', card],
  ['button', button],
  ['badge', badge],
  ['ToolsSelector', ToolsSelector],
  ['ServicesOverview', ServicesOverview],
  ['Tracking', Tracking],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Testimonials', Testimonials],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
]);

export default componentMap;
