"use server";
import { supabase } from "../utils/client";
import { unstable_cache } from "next/cache";

export type Project = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
};

export const getProjects = unstable_cache(
  async (): Promise<Project[]> => {
    const { data, error } = await supabase
      .from("Projects")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    return data || [];
  },
  ["projects-list"],
  { revalidate: 60 }
);
