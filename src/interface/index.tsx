interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}

interface Progress {
  progress: number;
}

interface ArraryType {
  map: Function;
}

interface FolderStructure {
  parentId: string;
}
