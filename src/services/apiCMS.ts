const token = import.meta.env.VITE_API_TOKEN;

import { ProjectType } from "../types/ProjectsType";

interface AllProjectsProps {
  setProjetos: React.Dispatch<React.SetStateAction<ProjectType[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export async function getAllProjects({
  setProjetos,
  setLoading,
}: AllProjectsProps) {
  return await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query:
        "{ allProjects { id cardImage{url} cardTitle cardDescription livePreview githubPreview stackPreview galeryProjects{url} } }",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      setProjetos(res.data.allProjects);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
}
