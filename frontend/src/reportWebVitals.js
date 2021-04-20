const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); // cumulative layout shift
      getFID(onPerfEntry); // first input delay
      getFCP(onPerfEntry); // first contentful paint
      getLCP(onPerfEntry); // largest contentful paint
      getTTFB(onPerfEntry); // time to first byte
    });
  }
};

export default reportWebVitals;
