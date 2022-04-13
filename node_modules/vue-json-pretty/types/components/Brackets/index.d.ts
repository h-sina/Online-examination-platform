import { PropType } from 'vue';
import './styles.less';
declare const _default: import("vue").DefineComponent<{
    data: {
        required: true;
        type: StringConstructor;
    };
    onClick: PropType<(e: MouseEvent) => void>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data: string;
} & {
    onClick?: ((e: MouseEvent) => void) | undefined;
}>, {}>;
export default _default;
