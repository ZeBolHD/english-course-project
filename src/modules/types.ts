export interface ImageApiProps {
  alternativeText: string;
  url: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface ImageSmallApiProps {
  url: string;
  alternativeText: string;
}

export interface TeacherMinProps {
  id?: string;
  name: string;
  avatar: ImageApiProps;
  slug: string;
  qualities: string[];
}

export interface TeachersProps {
  teachers: TeacherMinProps[];
}

export interface QualitiesProps {
  items: string[];
}
