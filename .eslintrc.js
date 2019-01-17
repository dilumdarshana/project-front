module.exports = {
    "extends": ["airbnb"],
    "parser": "babel-eslint",
    "rules": {
        "indent": ["error", 4],
        "indent": [2, 4, {"SwitchCase": 1}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        //"comma-dangle": ["error", "never"],
        "no-unused-vars": [
            "error", {
                "args": "none" 
            }
        ]
    }
};