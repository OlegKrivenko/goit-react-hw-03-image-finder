import css from './Loader.module.css';

import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
