export type Derive = {
  id: string;
  code: string;
  message: string;
  text: {
    prefix: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
};

export type DeriveLocation = {
  id: string;
  title: string;
  derive: Derive;
};

export type Path = {
  id: string;
  color: string;
  locations: Location[];
  title: string;
  description: string | null;
  randomNextLocation?: DeriveLocation;
  slug: 'eat' | 'wonder' | 'breathe' | 'remember' | 'dance';
};

export type Experience = {
  company: {
    name: string;
  };
  slug: string;
  title: string;
  paths: Path[];
};
