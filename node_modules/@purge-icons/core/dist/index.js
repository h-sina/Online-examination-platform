var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CodeGen: () => CodeGen,
  DefaultExtractor: () => DefaultExtractor,
  Extract: () => Extract,
  GetIconsData: () => GetIconsData,
  ParseIconNames: () => ParseIconNames,
  PurgeIcons: () => PurgeIcons,
  VerifyCollection: () => VerifyCollection,
  fetchCollection: () => fetchCollection
});

// src/codegen.ts
var import_path = __toESM(require("path"));
var import_fast_glob = __toESM(require("fast-glob"));
var import_fs_extra = __toESM(require("fs-extra"));

// src/utils.ts
var import_debug = __toESM(require("debug"));
var debug = (0, import_debug.default)("purge-icons");

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
var import_axios = __toESM(require("axios"));

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
      const collection = await Promise.resolve().then(() => __toESM(require(`@iconify/json/json/${name}.json`)));
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
      const { data } = await import_axios.default.get(url);
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
  const filenames = await (0, import_fast_glob.default)(fileGlobs, {
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
        extension: import_path.default.extname(f),
        raw: await import_fs_extra.default.readFile(f, "utf-8")
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
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CodeGen,
  DefaultExtractor,
  Extract,
  GetIconsData,
  ParseIconNames,
  PurgeIcons,
  VerifyCollection,
  fetchCollection
});
