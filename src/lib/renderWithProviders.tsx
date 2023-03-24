import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

type Options = {
  mocks?: MockedResponse[];
  routeOptions?: {
    route: string;
  };
};

export default function renderWithProviders(
  ui: React.ReactNode,
  { mocks, routeOptions }: Options = {},
) {
  return {
    ...render(
      <HelmetProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          {ui}
        </MockedProvider>
      </HelmetProvider>,
    ),
  };
}
