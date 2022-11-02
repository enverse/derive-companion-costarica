type Derive = {
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

type DeriveLocation = {
  id: string;
  title: string;
  derive: Derive;
};

type Path = {
  id: string;
  color: string;
  locations: Location[];
  title: string;
  description: string | null;
  randomNextLocation?: DeriveLocation;
  slug: 'eat' | 'wonder' | 'breathe' | 'remember' | 'dance';
};

type Experience = {
  company: {
    name: string;
  };
  slug: string;
  title: string;
  paths: Path[];
};
