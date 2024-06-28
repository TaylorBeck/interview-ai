import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Interview = pgTable('interview', {
  id:serial('id').primaryKey(),
  response:text('response').notNull(),
  jobTitle:varchar('jobTitle').notNull(),
  jobDescription:varchar('jobDescription').notNull(),
  jobExperience:varchar('jobExperience').notNull(),
  createdBy:varchar('createdBy').notNull(),
  createdAt:varchar('createdAt').notNull(),
  interviewId:varchar('interviewId').notNull()

})