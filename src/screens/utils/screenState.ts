type ScreenState<T> = {
  status: "ok" | "loading" | "error";
  data?: T;
  errorMessage?: string;
};

export default ScreenState;
