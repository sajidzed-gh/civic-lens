import type { FC } from 'react';
import { navWrapper } from './nav.styled';

interface navProps {}

const nav: FC<navProps> = () => (
 <navWrapper>
    nav Component
 </navWrapper>
);

export default nav;
