module.exports ={
    presets: ["next/babel"],
    plugins : [
        ["styled-components", { "ssr": false }],
        "inline-react-svg"
    ]
};
