export interface ProjectType {
  cardDescription: string;
  cardImage: {
    url: string;
  };
  cardTitle: string;
  galeryProjects: [{ url: string }];
  githubPreview: string;
  id: string;
  livePreview: string;
  stackPreview: string;
}
