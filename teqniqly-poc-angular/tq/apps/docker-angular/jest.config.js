module.exports = {
  name: 'docker-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/docker-angular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
