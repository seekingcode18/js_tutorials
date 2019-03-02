module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    {
        "extends": [
          "prettier"
        ]
      }
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "always"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 80,
            }
        ],
        "arrow-body-style": [
            2,
            "as-needed"
          ],
          "quotes": [
            2,
            "double",
            {
              "avoidEscape": true,
              "allowTemplateLiterals": true
            }
          ],
    }
}
