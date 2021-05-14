const cyrillicToTranslit = require("cyrillic-to-translit-js")();
module.exports = (config) => {
    config.addPassthroughCopy("src/images");
    config.addPassthroughCopy("src/scripts");
    config.addPassthroughCopy("src/styles");
    config.addPassthroughCopy("src/files");
    config.addPassthroughCopy({
        './node_modules/aos/dist/aos.js': './scripts/aos.js',
        './node_modules/aos/dist/aos.css': './styles/aos.css',
    })

    config.addFilter("translit", (value) => {
        return cyrillicToTranslit.transform(value).replace(/[!?;:,.]/g, '');
    });

    config.addNunjucksFilter("top", (collection, count) => {
        return collection.slice(0, count);
    });

    config.addTransform("beautify", (content, outputPath) => {
        if (outputPath && outputPath.endsWith(".html")) {
            const htmlmin = require("html-minifier");
            const beautify = require("js-beautify").html;

            const result = htmlmin.minify(content, {
                removeComments: true,
                collapseWhitespace: true,
            });

            return beautify(result);
        }

        return content;
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            data: "data",
            includes: "includes",
            layouts: "layouts",
        },
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        passthroughFileCopy: true,
        templateFormats: ["md", "njk"],
        pathPrefix: "/kinoclan/",
    };
};
