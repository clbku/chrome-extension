export function typedAction<T extends string>(
  type: T
): {
  type: T;
};

export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): {
  type: T;
  payload: P;
};

export function typedAction(type: string, payload?: any, condition?: any) {
  return { type, payload, condition };
}

export enum ScreenType {
  "DASHBOARD" = 1,
  "NEWS" = 2,
  "SETTING" = 3,
}
