import { IconifyJSON } from '@iconify/types';
import { IconifyJSON as IconifyJSON$1 } from '@iconify/iconify';

declare type CollectionId = 'ic' | 'mdi' | 'ph' | 'ri' | 'carbon' | 'bi' | 'tabler' | 'ion' | 'uil' | 'teenyicons' | 'clarity' | 'iconoir' | 'majesticons' | 'zondicons' | 'ant-design' | 'bx' | 'bxs' | 'gg' | 'cil' | 'lucide' | 'pixelarticons' | 'system-uicons' | 'ci' | 'akar-icons' | 'typcn' | 'radix-icons' | 'ep' | 'mdi-light' | 'fe' | 'eos-icons' | 'line-md' | 'charm' | 'prime' | 'heroicons-outline' | 'heroicons-solid' | 'uiw' | 'uim' | 'uit' | 'uis' | 'maki' | 'gridicons' | 'mi' | 'quill' | 'gala' | 'fluent' | 'icon-park-outline' | 'icon-park' | 'vscode-icons' | 'jam' | 'codicon' | 'pepicons' | 'bytesize' | 'ei' | 'fa6-solid' | 'fa6-regular' | 'octicon' | 'ooui' | 'nimbus' | 'openmoji' | 'twemoji' | 'noto' | 'noto-v1' | 'emojione' | 'emojione-monotone' | 'emojione-v1' | 'fxemoji' | 'bxl' | 'logos' | 'simple-icons' | 'cib' | 'fa6-brands' | 'arcticons' | 'file-icons' | 'brandico' | 'entypo-social' | 'cryptocurrency' | 'flag' | 'circle-flags' | 'flagpack' | 'cif' | 'gis' | 'map' | 'geo' | 'fad' | 'academicons' | 'wi' | 'healthicons' | 'medical-icon' | 'la' | 'eva' | 'dashicons' | 'flat-color-icons' | 'entypo' | 'foundation' | 'raphael' | 'icons8' | 'iwwa' | 'fa-solid' | 'fa-regular' | 'fa-brands' | 'fa' | 'fontisto' | 'icomoon-free' | 'ps' | 'subway' | 'oi' | 'wpf' | 'simple-line-icons' | 'et' | 'el' | 'vaadin' | 'grommet-icons' | 'whh' | 'si-glyph' | 'zmdi' | 'ls' | 'bpmn' | 'flat-ui' | 'vs' | 'topcoat' | 'il' | 'websymbol' | 'fontelico' | 'feather' | 'mono-icons';

declare type ExtractorResult = string[];
declare type ExtractorFunction<T = string> = (content: T) => ExtractorResult;
interface RawContent {
    extension: string;
    raw: string;
}
interface Extractor {
    extensions: string[];
    extractor: ExtractorFunction;
}
interface PurgeIconsOptions {
    content?: (string | RawContent)[];
    included?: string[];
    includedCollections?: CollectionId[];
    defaultExtractor?: Extractor;
    extractors?: Extractor[];
    iconSource?: IconSource;
    remoteDataAPI?: string;
    iconifyImportName?: string;
    format?: OutputFormat;
}
declare type IconSource = 'local' | 'remote' | 'auto';
declare type OutputFormat = 'mjs' | 'cjs' | 'ts' | 'json' | 'js';
declare type CollectionCache = Partial<Record<CollectionId, IconifyJSON>>;

declare function PurgeIcons(options?: PurgeIconsOptions): Promise<string>;
declare const DefaultExtractor: Extractor;
declare function Extract(options?: PurgeIconsOptions): Promise<string[]>;
declare function VerifyCollection(name: string): name is CollectionId;
declare function ParseIconNames(icons: string[]): Partial<Record<CollectionId, string[]>>;
declare function GetIconsData(icons: string[], options?: PurgeIconsOptions): Promise<IconifyJSON$1[]>;
declare function CodeGen(icons: string[], options?: PurgeIconsOptions): Promise<string>;

declare function fetchCollection(name: CollectionId, source?: IconSource, remoteDataAPI?: string, cache?: CollectionCache): Promise<IconifyJSON>;

export { CodeGen, CollectionCache, DefaultExtractor, Extract, Extractor, ExtractorFunction, ExtractorResult, GetIconsData, IconSource, OutputFormat, ParseIconNames, PurgeIcons, PurgeIconsOptions, RawContent, VerifyCollection, fetchCollection };
