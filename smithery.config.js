export default {
    esbuild: {
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
        ]
    },
};