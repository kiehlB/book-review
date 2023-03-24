import { InitializationData } from 'src/lib/types';

export const registrationFlowMockData: InitializationData = {
  id: '1d225d8c-829b-4016-ae04-69b96126efdd',
  type: 'browser',
  expires_at: '2022-07-31T11:29:43.777669965Z',
  issued_at: '2022-07-31T11:19:43.777669965Z',
  request_url: `${authUrl}/self-service/login/browser`,
  ui: {
    action: `${authUrl}/self-service/login?flow=1d225d8c-829b-4016-ae04-69b96126efdd`,
    method: 'POST',
    nodes: [
      {
        type: 'input',
        group: 'default',
        attributes: {
          name: 'csrf_token',
          type: 'hidden',
          value:
            'u1Fk0cvGZr9yUFABSyLmG7kF62h6S6B8MfXpLJdwB1PtaH5J+wTAvdL7pOdlOhGYa/gTyUawNAMi9s0GftjCHw==',
          required: true,
          disabled: false,
          node_type: 'input',
        },
        messages: [],
        meta: {},
      },
      {
        type: 'input',
        group: 'default',
        attributes: {
          name: 'identifier',
          type: 'text',
          value: '',
          required: true,
          disabled: false,
          node_type: 'input',
        },
        messages: [],
        meta: { label: { id: 1070004, text: 'ID', type: 'info' } },
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'password',
          type: 'password',
          required: true,
          disabled: false,
          node_type: 'input',
        },
        messages: [],
        meta: { label: { id: 1070001, text: 'Password', type: 'info' } },
      },
      {
        type: 'input',
        group: 'password',
        attributes: {
          name: 'method',
          type: 'submit',
          value: 'password',
          disabled: false,
          node_type: 'input',
        },
        messages: [],
        meta: {
          label: { id: 1010001, text: 'Sign in', type: 'info', context: {} },
        },
      },
    ],
  },
  created_at: '2022-07-31T11:19:43.787514Z',
  updated_at: '2022-07-31T11:19:43.787514Z',
  refresh: false,
  requested_aal: 'aal1',
};
