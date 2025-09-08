// Below are built-in components that are available in the app, it's recommended to keep them as is
import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';
// end of built-in components

// Components imported from the app itself
import * as select from 'src/components/ui/select';
import * as input from 'src/components/ui/input';
import * as card from 'src/components/ui/card';
import * as button from 'src/components/ui/button';
import * as Values from 'src/components/quickinfocomponents/Values';
import * as Testimonials from 'src/components/quickinfocomponents/Testimonials';
import * as Stats from 'src/components/quickinfocomponents/Stats';
import * as Services from 'src/components/quickinfocomponents/Services';
import * as QuickActions from 'src/components/quickinfocomponents/QuickActions';
import * as OurTeam from 'src/components/quickinfocomponents/OurTeam';
import * as Mission from 'src/components/quickinfocomponents/Mission';
import * as History from 'src/components/quickinfocomponents/History';
import * as PartialDesignDynamicPlaceholder from 'src/components/partial-design-dynamic-placeholder/PartialDesignDynamicPlaceholder';
import * as Header from 'src/components/navigation/Header';
import * as Footer from 'src/components/navigation/Footer';
import * as utils from 'src/components/lib/utils';
import * as DocFinderSearch from 'src/components/doctorfinder/DocFinderSearch';
import * as DocFinderHero from 'src/components/doctorfinder/DocFinderHero';
import * as doctorbio from 'src/components/docinfo/doctorbio';
import * as HeroSection from 'src/components/banners/HeroSection';


// Components must be registered within the map to match the string key with component name in Sitecore
export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['select', select],
  ['input', input],
  ['card', card],
  ['button', button],
  ['Values', Values],
  ['Testimonials', Testimonials],
  ['Stats', Stats],
  ['Services', Services],
  ['QuickActions', QuickActions],
  ['OurTeam', OurTeam],
  ['Mission', Mission],
  ['History', History],
  ['PartialDesignDynamicPlaceholder', PartialDesignDynamicPlaceholder],
  ['Header', Header],
  ['Footer', Footer],
  ['utils', utils],
  ['DocFinderSearch', DocFinderSearch],
  ['DocFinderHero', DocFinderHero],
  ['doctorbio', doctorbio],
  ['HeroSection', HeroSection],
]);

export default componentMap;
