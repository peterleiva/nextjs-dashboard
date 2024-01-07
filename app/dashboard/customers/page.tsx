import { sleep } from '@/app/lib/utils';

export default async function Page() {
  await sleep(2_000);
  return <div>Customers page</div>;
}
