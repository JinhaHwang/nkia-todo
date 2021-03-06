module.exports = {
    plugins: ['react', 'jest'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    rules: {
        'no-console': 'off',
        // 'no-undef': 'off',
        // 'no-unused-vars': 'off',
        'react/prop-types': 'off',
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        'jest/globals': true,
    },
}
