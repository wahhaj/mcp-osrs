import { createRequire } from 'module';

export default {
    esbuild: {
        format: "esm",
        target: "node20",
        external: [
            "zod-to-json-schema",
            "fs",
            "path",
            "readline",
            "url",
            "util",
            "events",
            "child_process",
            "os",
            "stream",
            "tty",
            "crypto",
            "http",
            "https",
            "zlib",
            "net",
            "tls",
            "assert"
        ],
        banner: {
            js: `import { createRequire } from 'module';const require = createRequire(import.meta.url);`
        }
    },
};