import PropTypes from 'prop-types';

import Wrapper from './scForm';

const Form = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>;

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
