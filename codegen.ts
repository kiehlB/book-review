import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: '/lib/graphql/*.ts',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'types/gql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      presetConfig: {
        gqlTagName: 'gql',
      },
      config: {
        withComponent: false,
        withHOC: false,
        withHooks: true,
        reactApolloVersion: 3,
        dedupeFragments: true,
        ignoreNoDocuments: true,
      },
    },
  },
};

export default config;
