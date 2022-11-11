import Link from 'next/link';
import React from 'react';

const LinkToPartners = ({ children }: { children?: React.ReactNode }) => (
  <Link style={{ fontWeight: 'bold', borderBottom: '2px solid' }} href="/partners">
    {children}
  </Link>
);

export default LinkToPartners;
