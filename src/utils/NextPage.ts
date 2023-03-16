type Params = Partial<Record<string, string>>;
export type NextPage<P extends {params?: Params, searchParams?: Params }> = React.FC<P>;