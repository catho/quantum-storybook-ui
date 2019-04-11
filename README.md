# quantum-storybook-ui

A **Design System** is the complete set of design standards, documentation, and principles along with the toolkit (UI patterns and code components) to achieve those standards. Over time, these 'systems' are growing in popularity - a very popular one is [Quantum](https://catho.github.io/quantum/),

Quantum uses Storybook, a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

Through reflection patterns, this project is responsible for auto-generating docs and testable preview/code from component instance, meaning that docs never gets deprecated, they have short stories and beautiful documentation interface.

# Usage

Quantum-storybook-ui is very easy to use and require almost no effort.

## Instalation

It can be installed via npm or yarn.

```sh
yarn add @catho/quantum-storybook-ui
```
Using the components will look something like

```js
import { AutoExample } from  '@catho/quantum-storybook-ui';
```

## Creating a story

Creating a component story requires zero work.
With ten or less lines of code (as you can see below), you can create a full documented component like this [Alert](https://catho.github.io/quantum/?selectedKind=Alert&selectedStory=Alert&full=0&addons=0&stories=1&panelRight=0)
This doc never gets deprecated, even if the component changes.

```js
import { AutoExample } from  '@catho/quantum-storybook-ui';
import { Alert } from  './components';

storiesOf('Alert', module).add('Alert', ()  => (
<AutoExample
  description={`description`}
  component={Alert}
  componentProps={{
    children:  `This is awesome!`,
    icon:  'face',
    }}
  />
));
```

Quantum-storybook-ui exports over 18 visual components that allow you customize your storybook looks too.
