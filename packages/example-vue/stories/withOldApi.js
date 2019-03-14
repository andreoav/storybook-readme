import { storiesOf } from '@storybook/vue';
import { withDocs, withReadme, doc } from 'storybook-readme';

import MyButton from '../components/MyButton/MyButton.vue';

import ButtonReadme from '../components/MyButton/README.md';
import ButtonDocs from '../components/MyButton/DOCS.md';

storiesOf('Old Api', module).add(
  'withDocs hoc',
  withDocs(ButtonReadme, () => {
    return {
      components: {
        MyButton,
      },
      template: `<my-button>My Button</my-button>`,
    };
  }),
);

storiesOf('Old Api', module)
  .addDecorator(withDocs(ButtonReadme))
  .add('withDocs decorator', () => {
    return {
      components: {
        MyButton,
      },
      template: `<my-button>My Button</my-button>`,
    };
  });

storiesOf('Old Api', module).add('doc', doc(ButtonReadme));

storiesOf('Old Api', module)
  .addParameters({
    readme: {
      codeTheme: 'a11y-dark',
    },
  })
  .add(
    'withReadme hoc',
    withReadme(ButtonReadme, () => {
      return {
        components: {
          MyButton,
        },
        template: `<my-button>My Button</my-button>`,
      };
    }),
  );

storiesOf('Old Api', module)
  .addDecorator(withReadme(ButtonReadme))
  .add('withReadme decorator', () => {
    return {
      components: {
        MyButton,
      },
      template: `<my-button>My Button</my-button>`,
    };
  });
