export default {
    esbuild: {
        format: "esm",
        target: "node20",
        external: ["zod-to-json-schema"]
    },
};