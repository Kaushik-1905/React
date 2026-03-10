import React from "react";

const WithLoading = (WrappedComponent) => {
  return function LoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <h3>Loading...</h3>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithLoading;