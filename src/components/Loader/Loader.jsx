import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loaderOverlay">
      <div className="loaderWrapper">
        <Triangle
          height="40"
          width="40"
          color="#702282"
          ariaLabel="triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
