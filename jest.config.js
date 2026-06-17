module.exports = {
  // Needed for React component testing (DOM APIs like document/window).
  testEnvironment: 'jsdom',

  // Ensure Jest can understand modern JS/JSX via Babel.
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Adds useful DOM assertions like `toBeInTheDocument()`.
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // Parcel can import SVGs; Jest needs a stub for them.
  moduleNameMapper: {
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
