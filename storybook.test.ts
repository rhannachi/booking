import path from 'path'
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots'

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '.storybook'),
  integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
  test: multiSnapshotWithOptions()
})
