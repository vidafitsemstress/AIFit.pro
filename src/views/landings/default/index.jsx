'use client';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import useDataThemeMode from '@/hooks/useDataThemeMode';

// @data
import {
  benefit,
  faq,
  feature20,
  feature18,
  hero,
  integration,
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
          {
            importFunc: () =>
              import('@/blocks/feature').then((module) => ({ default: module.Feature18 })),
            props: feature18
          }
        ]}
        offset="200px"
      />

      <div id="precos">
        <LazySection
          sections={[
            {
              importFunc: () =>
                import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })),
              props: pricing
            }
          ]}
          offset="200px"
        />
      </div>

      <LazySection
        sections={[
          {
            importFunc: () =>
              import('@/blocks/faq').then((module) => ({ default: module.Faq6 })),
            props: faq
          }
        ]}
        offset="200px"
      />
    </>
  );
}
