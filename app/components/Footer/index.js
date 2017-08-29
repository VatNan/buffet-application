import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import Labal from '../../components/Label';


function Footer() {
  return (
    <Wrapper>
      <section>
        <Labal
          fontSize="15px"
          color="black"
        >
          Power by react-boilerplate
        </Labal>
      </section>
    </Wrapper>
  );
}

export default Footer;
