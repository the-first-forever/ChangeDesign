import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// TODO storybook example: https://github.com/vitest-dev/vitest/blob/main/examples/react-storybook/src/setup.ts
// import { setGlobalConfig } from '@storybook/testing-react'
// import { getWorker } from 'msw-storybook-addon'
// import * as globalStorybookConfig from '../.storybook/preview'
// setGlobalConfig(globalStorybookConfig)
// Ensure MSW connections are closed
// afterAll(() => getWorker().close())