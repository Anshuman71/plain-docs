import '@docsly/react/styles.css';

import Docsly from '@docsly/react';
import { usePathname } from 'next/navigation';

export default function DocslyClient() {
  const pathname = usePathname();

  return (
    <Docsly
      publicId={'public_L5LFPi0sz2uQ3WlnZN5kp9PgIQA07MMcveB6ramMJ2nFxjZ7K9zPk7M1nO0VyvZK'}
      pathname={pathname}
    />
  );
}
