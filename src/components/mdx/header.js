import styled from '@emotion/styled';
import theme from '../../../config/theme';

export default styled.h1(
  theme.mq({
    fontSize: [28, 32, 36],
    color: 'black',
    fontFamily: 'Roboto Regular',
    textTransform: 'initial',
    lineHeight: '1.35',
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 10,
  })
);
