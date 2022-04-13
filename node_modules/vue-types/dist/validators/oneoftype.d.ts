import { Prop, VueProp, InferType } from '../types';
export default function oneOfType<D extends V, U extends VueProp<any> | Prop<any> = any, V = InferType<U>>(arr: U[]): import("../types").VueTypeDef<D>;
