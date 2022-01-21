type ResultOk<T> = {
  type: 'Result/Ok';
  data: T;
};

type ResultError<U> = {
  type: 'Result/Error';
  reason: U;
};

export type Result<T = unknown, U = unknown> = ResultOk<T> | ResultError<U>;

const ok = <T = unknown, U = unknown>(data: T): Result<T, U> => {
  return {
    type: 'Result/Ok',
    data,
  };
};

const error = <T = unknown, U = unknown>(reason: U): Result<T, U> => {
  return {
    type: 'Result/Error',
    reason,
  };
};

export { ok, error };
