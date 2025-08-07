// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as button from 'src/components/ui/button';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Stats from '@/components/page content/Stats';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as HeroBanner from 'src/components/banners/HeroBanner';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['button', button],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Stats', Stats],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['HeroBanner', HeroBanner],
]);

export default componentMap;
