import { Job, Company } from "./db.js";
export const resolvers = {
  Mutation: {
    createJob: async (_root, { input }) => await Job.create(input),
    deleteJob: async (_root, { id }) => await Job.delete(id),
    updateJob: async (_root, args) => {
      // console.log(args);
      // usually I would need to find and update,
      //but seems the fakebase can just update the record with the same ID
      const job = await Job.findById(args.input.id);
      console.log(job);
      return await Job.update(args.input);
    },
  },

  Query: {
    job: async (_root, { id }) => await Job.findById(id),
    jobs: async () => await Job.findAll(),
    company: async (_parentObject, { id }) => await Company.findById(id),
  },

  Job: {
    company: async job => await Company.findById(job.companyId),
  },

  Company: {
    jobs: async company => await Job.findAll(job => job.companyId === company.id),
  },
};
