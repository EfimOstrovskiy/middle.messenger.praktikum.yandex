module.exports = {
  preset: 'ts-jest',
  coveragePathIgnorePatterns: ['/node_modules/', '/server/', '/public/', '/dist/'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jsdom',
};
