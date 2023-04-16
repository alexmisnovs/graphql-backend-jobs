import { Job, Company } from "./db.js";
export const resolvers = {
  Mutation: {
    createJob: async (_parentObject, { input }) => await Job.create(input),
  },
  Query: {
    job: async (_parentObject, { id }) => {
      return await Job.findById(id);
    },
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
    company: async (_parentObject, { id }) => await Company.findById(id),
  },

  Job: {
    company: async job => await Company.findById(job.companyId),
  },

  Company: {
    jobs: async company => await Job.findAll(job => job.companyId === company.id),
  },
};
