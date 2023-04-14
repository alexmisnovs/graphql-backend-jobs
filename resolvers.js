import { Job, Company } from "./db.js";
export const resolvers = {
  Query: {
    jobs: async () =>
      // [
      //   {
      //     id: "id1",
      //     title: "Hello 1",
      //     description: " This is description 1",
      //   },
      //   {
      //     id: "id2",
      //     title: "Hello 2",
      //     description: " This is description 2",
      //   },
      // ],
      Job.findAll(),
  },
  Job: {
    company: async job => await Company.findById(job.companyId),
  },
};
