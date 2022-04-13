var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// src/codegen.ts
import path from "path";
import fg from "fast-glob";
import fs from "fs-extra";

// src/utils.ts
import Debug from "debug";
var debug = Debug("purge-icons");

// src/generated/collections.ts
var CollectionIds = [
  "ic",
  "mdi",
  "ph",
  "ri",
  "carbon",
  "bi",
  "tabler",
  "ion",
  "uil",
  "teenyicons",
  "clarity",
  "iconoir",
  "majesticons",
  "zondicons",
  "ant-design",
  "bx",
  "bxs",
  "gg",
  "cil",
  "lucide",
  "pixelarticons",
  "system-uicons",
  "ci",
  "akar-icons",
  "typcn",
  "radix-icons",
  "ep",
  "mdi-light",
  "fe",
  "eos-icons",
  "line-md",
  "charm",
  "prime",
  "heroicons-outline",
  "heroicons-solid",
  "uiw",
  "uim",
  "uit",
  "uis",
  "maki",
  "gridicons",
  "mi",
  "quill",
  "gala",
  "fluent",
  "icon-park-outline",
  "icon-park",
  "vscode-icons",
  "jam",
  "codicon",
  "pepicons",
  "bytesize",
  "ei",
  "fa6-solid",
  "fa6-regular",
  "octicon",
  "ooui",
  "nimbus",
  "openmoji",
  "twemoji",
  "noto",
  "noto-v1",
  "emojione",
  "emojione-monotone",
  "emojione-v1",
  "fxemoji",
  "bxl",
  "logos",
  "simple-icons",
  "cib",
  "fa6-brands",
  "arcticons",
  "file-icons",
  "brandico",
  "entypo-social",
  "cryptocurrency",
  "flag",
  "circle-flags",
  "flagpack",
  "cif",
  "gis",
  "map",
  "geo",
  "fad",
  "academicons",
  "wi",
  "healthicons",
  "medical-icon",
  "la",
  "eva",
  "dashicons",
  "flat-color-icons",
  "entypo",
  "foundation",
  "raphael",
  "icons8",
  "iwwa",
  "fa-solid",
  "fa-regular",
  "fa-brands",
  "fa",
  "fontisto",
  "icomoon-free",
  "ps",
  "subway",
  "oi",
  "wpf",
  "simple-line-icons",
  "et",
  "el",
  "vaadin",
  "grommet-icons",
  "whh",
  "si-glyph",
  "zmdi",
  "ls",
  "bpmn",
  "flat-ui",
  "vs",
  "topcoat",
  "il",
  "websymbol",
  "fontelico",
  "feather",
  "mono-icons"
];
var ExtractorRegex = /(?:ic|mdi|ph|ri|carbon|bi|tabler|ion|uil|teenyicons|clarity|iconoir|majesticons|zondicons|ant-design|bx|bxs|gg|cil|lucide|pixelarticons|system-uicons|ci|akar-icons|typcn|radix-icons|ep|mdi-light|fe|eos-icons|line-md|charm|prime|heroicons-outline|heroicons-solid|uiw|uim|uit|uis|maki|gridicons|mi|quill|gala|fluent|icon-park-outline|icon-park|vscode-icons|jam|codicon|pepicons|bytesize|ei|fa6-solid|fa6-regular|octicon|ooui|nimbus|openmoji|twemoji|noto|noto-v1|emojione|emojione-monotone|emojione-v1|fxemoji|bxl|logos|simple-icons|cib|fa6-brands|arcticons|file-icons|brandico|entypo-social|cryptocurrency|flag|circle-flags|flagpack|cif|gis|map|geo|fad|academicons|wi|healthicons|medical-icon|la|eva|dashicons|flat-color-icons|entypo|foundation|raphael|icons8|iwwa|fa-solid|fa-regular|fa-brands|fa|fontisto|icomoon-free|ps|subway|oi|wpf|simple-line-icons|et|el|vaadin|grommet-icons|whh|si-glyph|zmdi|ls|bpmn|flat-ui|vs|topcoat|il|websymbol|fontelico|feather|mono-icons):[\w\d-]+/g;

// src/loader.ts
import axios from "axios";

// src/constants.ts
var DEFAULT_API_PATH = "https://raw.githubusercontent.com/iconify/collections-json/master/json";
var DELIMITER = ":";

// src/loader.ts
var default_cache = {};
async function fetchCollection(name, source = "auto", remoteDataAPI = DEFAULT_API_PATH, cache = default_cache) {
  if (cache[name])
    return cache[name];
  if (source === "local" || source === "auto") {
    try {
      debug(`fetching collection "${name}" from local packages`);
      const collection = await Promise.resolve().then(() => __toESM(__require(`@iconify/json/json/${name}.json`)));
      cache[name] = collection;
      return collection;
    } catch (e) {
      debug(`error on fetching collection "${name}"`, e);
      if (source === "local")
        throw e;
    }
  }
  if (source === "remote" || source === "auto") {
    try {
      const url = `${remoteDataAPI}/${name}.json`;
      debug(`loading collection "${name}" from remote ${url}`);
      const { data } = await axios.get(url);
      const collection = typeof data === "string" ? JSON.parse(data) : data;
      cache[name] = collection;
      return collection;
    } catch (e) {
      debug(`error on fetching collection "${name}" from remote`, e);
      throw e;
    }
  }
  throw new Error(`Unabled to fetch collection "${name}"`);
}

// src/codegen.ts
async function PurgeIcons(options = {}) {
  const icons = await Extract(options);
  const code = await CodeGen([...icons, ...options.included || []], options);
  return code;
}
var DefaultExtractor = {
  extensions: ["*"],
  extractor(str) {
    return Array.from(str.matchAll(ExtractorRegex)).map((i) => i[0]).filter(Boolean);
  }
};
async function Extract(options = {}) {
  const content = options.content || [];
  const fileGlobs = content.filter((i) => typeof i === "string");
  const rawContents = content.filter((i) => typeof i !== "string");
  const filenames = await fg(fileGlobs, {
    onlyFiles: true,
    ignore: [
      "**/node_modules"
    ]
  });
  const files = [
    ...rawContents,
    ...await Promise.all(filenames.map(async (f) => {
      debug(`extracting from ${f}`);
      return {
        extension: path.extname(f),
        raw: await fs.readFile(f, "utf-8")
      };
    }))
  ];
  const extractors = [options.defaultExtractor || DefaultExtractor, ...options.extractors || []];
  const keys = /* @__PURE__ */ new Set();
  for (const file of files) {
    for (const extractor of extractors) {
      const result = await Promise.resolve(extractor.extractor(file.raw));
      for (const key of result)
        keys.add(key);
    }
  }
  return Array.from(keys);
}
function VerifyCollection(name) {
  return CollectionIds.includes(name);
}
function ParseIconNames(icons) {
  var _a;
  const parsed = {};
  for (const icon of icons) {
    const [collection, name] = icon.split(DELIMITER, 2);
    if (!VerifyCollection(collection)) {
      throw new Error(`Invalid collection name: "${collection}"`);
    } else {
      if (!parsed[collection])
        parsed[collection] = [];
      (_a = parsed[collection]) == null ? void 0 : _a.push(name);
    }
  }
  return parsed;
}
async function GetIconsData(icons, options = {}) {
  const parsed = ParseIconNames(icons);
  return await Promise.all(Object.entries(parsed).map(async ([id, icons2]) => {
    const collection = await fetchCollection(id, options.iconSource, options.remoteDataAPI);
    return {
      prefix: id,
      width: collection.width,
      height: collection.height,
      icons: Object.fromEntries(Object.entries(collection.icons).filter(([k]) => icons2 == null ? void 0 : icons2.includes(k)))
    };
  }));
}
async function CodeGen(icons, options = {}) {
  const data = await GetIconsData(icons, options);
  const json = JSON.stringify(data);
  if (options.format === "json")
    return json;
  const iconifyImport = options.iconifyImportName || "@iconify/iconify";
  let importScript = "";
  let exportScript = "";
  switch (options.format) {
    case "js":
    case "cjs":
      importScript = `const Iconify = require('${iconifyImport}').default`;
      exportScript = "module.exports = Iconify";
      break;
    case "mjs":
    case "ts":
    case void 0:
      importScript = `import Module from '${iconifyImport}'
const Iconify = Module.default || Module`;
      exportScript = "export default Iconify";
      break;
    default:
      throw new Error(`Unknown output format "${options.format}"`);
  }
  return `${importScript}

const collections = JSON.parse('${json.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}')

collections.forEach(c => Iconify.addCollection(c))

${exportScript}
`;
}
export {
  CodeGen,
  DefaultExtractor,
  Extract,
  GetIconsData,
  ParseIconNames,
  PurgeIcons,
  VerifyCollection,
  fetchCollection
};
