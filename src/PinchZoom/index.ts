import PinchZoomComp from './component';
import type { DefaultProps, RequiredProps } from './types';

export default PinchZoomComp;

export {
  hasTranslate3DSupport,
  make2dTransformValue,
  make3dTransformValue,
  isTouch,
} from './utils';

export type { UpdateAction, ScaleToOptions } from './types';

export interface PinchZoomProps extends RequiredProps, Partial<DefaultProps> {
  // noop
}
