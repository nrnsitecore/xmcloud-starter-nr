// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as progress from 'src/components/ui/progress';
import * as card from 'src/components/ui/card';
import * as button from 'src/components/ui/button';
import * as badge from 'src/components/ui/badge';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as GridOverview from 'src/components/grid/GridOverview';
import * as HeroBanner from 'src/components/banners/HeroBanner';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['progress', progress],
  ['card', card],
  ['button', button],
  ['badge', badge],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['GridOverview', GridOverview],
  ['HeroBanner', HeroBanner],
]);

export default componentMap;
