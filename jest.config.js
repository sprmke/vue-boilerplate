module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "vue$": "<rootDir>/node_modules/vue/dist/vue.js"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  transformIgnorePatterns: ["/node_modules/"],
  testPathIgnorePatterns: [
    "/generator/"
  ],
  testURL: "http://localhost/",
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  setupFiles: ["<rootDir>/src/app/tests/unit/config/setup-jest.js"]
};