import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

import '@locale';

import { Routes } from '@routes';

import { useApp } from './hooks/useApp';
import { MembersProvider } from './screens/Members/hooks/useMembers';

const queryClient = new QueryClient();

export default function App() {
  useApp();

  return (
    <QueryClientProvider client={queryClient}>
      <MembersProvider>
        <Routes />
      </MembersProvider>
    </QueryClientProvider>
  );
}
