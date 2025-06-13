'use client';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {
  benefit,
  clientele,
  cta5,
  faq,
  feature20,
  feature21,
  feature18,
  hero,
  integration,
  other,
  pricing
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  useDataThemeMode();

  return (
    <>
      <Hero17 {...hero} />
      <Feature20 {...feature20} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/benefit').then((module) => ({ default: module.Benefit5 })), props: benefit },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration },
          { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature18 })), props: feature18 },
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },

        ]}
        offset="200px"
      />

      <LazySection
        sections={[


          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: pricing }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
