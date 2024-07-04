export type pokemonData = {
  name: string;
  url: string;
};

export type TableProps = {
  data: pokemonData[];
};

export type PaginationButtonProps = {
  url: string | null;
  setUrl: (url: string | null) => void;
  label: string;
  disabled: boolean;
};
