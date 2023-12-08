export type BuildPaths = {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
};

export type BuildMode = 'production' | 'development';

export type BuildPlatform = 'mobile' | 'desktop';

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  platform: BuildPlatform;
  analyzer?: boolean;
};
