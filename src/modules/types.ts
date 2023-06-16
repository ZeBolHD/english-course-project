export interface AvatarProps {
  alternativeText: string;
  url: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface TeacherMinProps {
  id?: string;
  name: string;
  avatar: AvatarProps;
  slug: string;
  qualities: string[];
}

export interface TeachersProps {
  teachers: TeacherMinProps[];
}

export interface QualitiesProps {
  items: string[];
}
