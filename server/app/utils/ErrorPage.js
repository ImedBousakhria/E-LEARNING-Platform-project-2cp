const notFound = {
    status: "404",
    message: "Your search couldn't be found",
  };
  const notValid = {
    status: "400",
    message: "Your request couldn't be handled",
  };
  const InternalError = {
    status: "500",
    message: "Something went wrong, Please try again",
  };
  export default { notFound, notValid, InternalError };