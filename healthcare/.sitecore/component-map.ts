// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as card from 'src/components/ui/card';
import * as button from 'src/components/ui/button';
import * as Stats from 'src/components/quickinfocomponents/Stats';
import * as Services from 'src/components/quickinfocomponents/Services';
import * as QuickActions from 'src/components/quickinfocomponents/QuickActions';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as HeroSection from 'src/components/banners/HeroSection';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['card', card],
  ['button', button],
  ['Stats', Stats],
  ['Services', Services],
  ['QuickActions', QuickActions],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['HeroSection', HeroSection],
]);

export default componentMap;
