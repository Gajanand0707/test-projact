import * as React from 'react';
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs/react-server-conditional";
import { PLASMIC } from '@/plasmic-init';

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost  />;
}
