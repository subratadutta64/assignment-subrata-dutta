import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';

export default async function IndexPage(): Promise<ReactElement> {
  const router = useRouter();
  await router.push('/search');
  return <div>Redirecting to search</div>;
}
