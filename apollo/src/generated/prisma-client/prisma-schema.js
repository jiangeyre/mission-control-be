module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePerson {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateProgram {
  count: Int!
}

type AggregateProject {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPerson(data: PersonCreateInput!): Person!
  updatePerson(data: PersonUpdateInput!, where: PersonWhereUniqueInput!): Person
  updateManyPersons(data: PersonUpdateManyMutationInput!, where: PersonWhereInput): BatchPayload!
  upsertPerson(where: PersonWhereUniqueInput!, create: PersonCreateInput!, update: PersonUpdateInput!): Person!
  deletePerson(where: PersonWhereUniqueInput!): Person
  deleteManyPersons(where: PersonWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  createProgram(data: ProgramCreateInput!): Program!
  updateProgram(data: ProgramUpdateInput!, where: ProgramWhereUniqueInput!): Program
  updateManyPrograms(data: ProgramUpdateManyMutationInput!, where: ProgramWhereInput): BatchPayload!
  upsertProgram(where: ProgramWhereUniqueInput!, create: ProgramCreateInput!, update: ProgramUpdateInput!): Program!
  deleteProgram(where: ProgramWhereUniqueInput!): Program
  deleteManyPrograms(where: ProgramWhereInput): BatchPayload!
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Person {
  id: ID!
  name: String!
  email: String!
  role: Role!
  manages(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  team: Project
  sl(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
  tl: Project
}

type PersonConnection {
  pageInfo: PageInfo!
  edges: [PersonEdge]!
  aggregate: AggregatePerson!
}

input PersonCreateInput {
  id: ID
  name: String!
  email: String!
  role: Role!
  manages: ProjectCreateManyWithoutProjectManagersInput
  team: ProjectCreateOneWithoutTeamInput
  sl: ProjectCreateManyWithoutSectionLeadInput
  tl: ProjectCreateOneWithoutTeamLeadInput
}

input PersonCreateManyWithoutManagesInput {
  create: [PersonCreateWithoutManagesInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateManyWithoutTeamInput {
  create: [PersonCreateWithoutTeamInput!]
  connect: [PersonWhereUniqueInput!]
}

input PersonCreateOneWithoutSlInput {
  create: PersonCreateWithoutSlInput
  connect: PersonWhereUniqueInput
}

input PersonCreateOneWithoutTlInput {
  create: PersonCreateWithoutTlInput
  connect: PersonWhereUniqueInput
}

input PersonCreateWithoutManagesInput {
  id: ID
  name: String!
  email: String!
  role: Role!
  team: ProjectCreateOneWithoutTeamInput
  sl: ProjectCreateManyWithoutSectionLeadInput
  tl: ProjectCreateOneWithoutTeamLeadInput
}

input PersonCreateWithoutSlInput {
  id: ID
  name: String!
  email: String!
  role: Role!
  manages: ProjectCreateManyWithoutProjectManagersInput
  team: ProjectCreateOneWithoutTeamInput
  tl: ProjectCreateOneWithoutTeamLeadInput
}

input PersonCreateWithoutTeamInput {
  id: ID
  name: String!
  email: String!
  role: Role!
  manages: ProjectCreateManyWithoutProjectManagersInput
  sl: ProjectCreateManyWithoutSectionLeadInput
  tl: ProjectCreateOneWithoutTeamLeadInput
}

input PersonCreateWithoutTlInput {
  id: ID
  name: String!
  email: String!
  role: Role!
  manages: ProjectCreateManyWithoutProjectManagersInput
  team: ProjectCreateOneWithoutTeamInput
  sl: ProjectCreateManyWithoutSectionLeadInput
}

type PersonEdge {
  node: Person!
  cursor: String!
}

enum PersonOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  role_ASC
  role_DESC
}

type PersonPreviousValues {
  id: ID!
  name: String!
  email: String!
  role: Role!
}

input PersonScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  AND: [PersonScalarWhereInput!]
  OR: [PersonScalarWhereInput!]
  NOT: [PersonScalarWhereInput!]
}

type PersonSubscriptionPayload {
  mutation: MutationType!
  node: Person
  updatedFields: [String!]
  previousValues: PersonPreviousValues
}

input PersonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PersonWhereInput
  AND: [PersonSubscriptionWhereInput!]
  OR: [PersonSubscriptionWhereInput!]
  NOT: [PersonSubscriptionWhereInput!]
}

input PersonUpdateInput {
  name: String
  email: String
  role: Role
  manages: ProjectUpdateManyWithoutProjectManagersInput
  team: ProjectUpdateOneWithoutTeamInput
  sl: ProjectUpdateManyWithoutSectionLeadInput
  tl: ProjectUpdateOneWithoutTeamLeadInput
}

input PersonUpdateManyDataInput {
  name: String
  email: String
  role: Role
}

input PersonUpdateManyMutationInput {
  name: String
  email: String
  role: Role
}

input PersonUpdateManyWithoutManagesInput {
  create: [PersonCreateWithoutManagesInput!]
  delete: [PersonWhereUniqueInput!]
  connect: [PersonWhereUniqueInput!]
  set: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutManagesInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutManagesInput!]
  deleteMany: [PersonScalarWhereInput!]
  updateMany: [PersonUpdateManyWithWhereNestedInput!]
}

input PersonUpdateManyWithoutTeamInput {
  create: [PersonCreateWithoutTeamInput!]
  delete: [PersonWhereUniqueInput!]
  connect: [PersonWhereUniqueInput!]
  set: [PersonWhereUniqueInput!]
  disconnect: [PersonWhereUniqueInput!]
  update: [PersonUpdateWithWhereUniqueWithoutTeamInput!]
  upsert: [PersonUpsertWithWhereUniqueWithoutTeamInput!]
  deleteMany: [PersonScalarWhereInput!]
  updateMany: [PersonUpdateManyWithWhereNestedInput!]
}

input PersonUpdateManyWithWhereNestedInput {
  where: PersonScalarWhereInput!
  data: PersonUpdateManyDataInput!
}

input PersonUpdateOneWithoutSlInput {
  create: PersonCreateWithoutSlInput
  update: PersonUpdateWithoutSlDataInput
  upsert: PersonUpsertWithoutSlInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpdateOneWithoutTlInput {
  create: PersonCreateWithoutTlInput
  update: PersonUpdateWithoutTlDataInput
  upsert: PersonUpsertWithoutTlInput
  delete: Boolean
  disconnect: Boolean
  connect: PersonWhereUniqueInput
}

input PersonUpdateWithoutManagesDataInput {
  name: String
  email: String
  role: Role
  team: ProjectUpdateOneWithoutTeamInput
  sl: ProjectUpdateManyWithoutSectionLeadInput
  tl: ProjectUpdateOneWithoutTeamLeadInput
}

input PersonUpdateWithoutSlDataInput {
  name: String
  email: String
  role: Role
  manages: ProjectUpdateManyWithoutProjectManagersInput
  team: ProjectUpdateOneWithoutTeamInput
  tl: ProjectUpdateOneWithoutTeamLeadInput
}

input PersonUpdateWithoutTeamDataInput {
  name: String
  email: String
  role: Role
  manages: ProjectUpdateManyWithoutProjectManagersInput
  sl: ProjectUpdateManyWithoutSectionLeadInput
  tl: ProjectUpdateOneWithoutTeamLeadInput
}

input PersonUpdateWithoutTlDataInput {
  name: String
  email: String
  role: Role
  manages: ProjectUpdateManyWithoutProjectManagersInput
  team: ProjectUpdateOneWithoutTeamInput
  sl: ProjectUpdateManyWithoutSectionLeadInput
}

input PersonUpdateWithWhereUniqueWithoutManagesInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutManagesDataInput!
}

input PersonUpdateWithWhereUniqueWithoutTeamInput {
  where: PersonWhereUniqueInput!
  data: PersonUpdateWithoutTeamDataInput!
}

input PersonUpsertWithoutSlInput {
  update: PersonUpdateWithoutSlDataInput!
  create: PersonCreateWithoutSlInput!
}

input PersonUpsertWithoutTlInput {
  update: PersonUpdateWithoutTlDataInput!
  create: PersonCreateWithoutTlInput!
}

input PersonUpsertWithWhereUniqueWithoutManagesInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutManagesDataInput!
  create: PersonCreateWithoutManagesInput!
}

input PersonUpsertWithWhereUniqueWithoutTeamInput {
  where: PersonWhereUniqueInput!
  update: PersonUpdateWithoutTeamDataInput!
  create: PersonCreateWithoutTeamInput!
}

input PersonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  manages_every: ProjectWhereInput
  manages_some: ProjectWhereInput
  manages_none: ProjectWhereInput
  team: ProjectWhereInput
  sl_every: ProjectWhereInput
  sl_some: ProjectWhereInput
  sl_none: ProjectWhereInput
  tl: ProjectWhereInput
  AND: [PersonWhereInput!]
  OR: [PersonWhereInput!]
  NOT: [PersonWhereInput!]
}

input PersonWhereUniqueInput {
  id: ID
  email: String
}

type Product {
  id: ID!
  name: String!
  program: Program!
  createdAt: DateTime!
  updatedAt: DateTime!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  id: ID
  name: String!
  program: ProgramCreateOneWithoutProductsInput!
  projects: ProjectCreateManyWithoutProductInput
}

input ProductCreateManyWithoutProgramInput {
  create: [ProductCreateWithoutProgramInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneWithoutProjectsInput {
  create: ProductCreateWithoutProjectsInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutProgramInput {
  id: ID
  name: String!
  projects: ProjectCreateManyWithoutProductInput
}

input ProductCreateWithoutProjectsInput {
  id: ID
  name: String!
  program: ProgramCreateOneWithoutProductsInput!
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
  OR: [ProductSubscriptionWhereInput!]
  NOT: [ProductSubscriptionWhereInput!]
}

input ProductUpdateInput {
  name: String
  program: ProgramUpdateOneRequiredWithoutProductsInput
  projects: ProjectUpdateManyWithoutProductInput
}

input ProductUpdateManyDataInput {
  name: String
}

input ProductUpdateManyMutationInput {
  name: String
}

input ProductUpdateManyWithoutProgramInput {
  create: [ProductCreateWithoutProgramInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutProgramInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutProgramInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneRequiredWithoutProjectsInput {
  create: ProductCreateWithoutProjectsInput
  update: ProductUpdateWithoutProjectsDataInput
  upsert: ProductUpsertWithoutProjectsInput
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutProgramDataInput {
  name: String
  projects: ProjectUpdateManyWithoutProductInput
}

input ProductUpdateWithoutProjectsDataInput {
  name: String
  program: ProgramUpdateOneRequiredWithoutProductsInput
}

input ProductUpdateWithWhereUniqueWithoutProgramInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutProgramDataInput!
}

input ProductUpsertWithoutProjectsInput {
  update: ProductUpdateWithoutProjectsDataInput!
  create: ProductCreateWithoutProjectsInput!
}

input ProductUpsertWithWhereUniqueWithoutProgramInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutProgramDataInput!
  create: ProductCreateWithoutProgramInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  program: ProgramWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [ProductWhereInput!]
  OR: [ProductWhereInput!]
  NOT: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Program {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type ProgramConnection {
  pageInfo: PageInfo!
  edges: [ProgramEdge]!
  aggregate: AggregateProgram!
}

input ProgramCreateInput {
  id: ID
  name: String!
  products: ProductCreateManyWithoutProgramInput
}

input ProgramCreateOneWithoutProductsInput {
  create: ProgramCreateWithoutProductsInput
  connect: ProgramWhereUniqueInput
}

input ProgramCreateWithoutProductsInput {
  id: ID
  name: String!
}

type ProgramEdge {
  node: Program!
  cursor: String!
}

enum ProgramOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProgramPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProgramSubscriptionPayload {
  mutation: MutationType!
  node: Program
  updatedFields: [String!]
  previousValues: ProgramPreviousValues
}

input ProgramSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProgramWhereInput
  AND: [ProgramSubscriptionWhereInput!]
  OR: [ProgramSubscriptionWhereInput!]
  NOT: [ProgramSubscriptionWhereInput!]
}

input ProgramUpdateInput {
  name: String
  products: ProductUpdateManyWithoutProgramInput
}

input ProgramUpdateManyMutationInput {
  name: String
}

input ProgramUpdateOneRequiredWithoutProductsInput {
  create: ProgramCreateWithoutProductsInput
  update: ProgramUpdateWithoutProductsDataInput
  upsert: ProgramUpsertWithoutProductsInput
  connect: ProgramWhereUniqueInput
}

input ProgramUpdateWithoutProductsDataInput {
  name: String
}

input ProgramUpsertWithoutProductsInput {
  update: ProgramUpdateWithoutProductsDataInput!
  create: ProgramCreateWithoutProductsInput!
}

input ProgramWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  products_every: ProductWhereInput
  products_some: ProductWhereInput
  products_none: ProductWhereInput
  AND: [ProgramWhereInput!]
  OR: [ProgramWhereInput!]
  NOT: [ProgramWhereInput!]
}

input ProgramWhereUniqueInput {
  id: ID
  name: String
}

type Project {
  id: ID!
  name: String!
  product: Product!
  status: Boolean
  sectionLead: Person
  teamLead: Person
  projectManagers(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  team(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProjectsInput!
  status: Boolean
  sectionLead: PersonCreateOneWithoutSlInput
  teamLead: PersonCreateOneWithoutTlInput
  projectManagers: PersonCreateManyWithoutManagesInput
  team: PersonCreateManyWithoutTeamInput
}

input ProjectCreateManyWithoutProductInput {
  create: [ProjectCreateWithoutProductInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateManyWithoutProjectManagersInput {
  create: [ProjectCreateWithoutProjectManagersInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateManyWithoutSectionLeadInput {
  create: [ProjectCreateWithoutSectionLeadInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutTeamInput {
  create: ProjectCreateWithoutTeamInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateOneWithoutTeamLeadInput {
  create: ProjectCreateWithoutTeamLeadInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutProductInput {
  id: ID
  name: String!
  status: Boolean
  sectionLead: PersonCreateOneWithoutSlInput
  teamLead: PersonCreateOneWithoutTlInput
  projectManagers: PersonCreateManyWithoutManagesInput
  team: PersonCreateManyWithoutTeamInput
}

input ProjectCreateWithoutProjectManagersInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProjectsInput!
  status: Boolean
  sectionLead: PersonCreateOneWithoutSlInput
  teamLead: PersonCreateOneWithoutTlInput
  team: PersonCreateManyWithoutTeamInput
}

input ProjectCreateWithoutSectionLeadInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProjectsInput!
  status: Boolean
  teamLead: PersonCreateOneWithoutTlInput
  projectManagers: PersonCreateManyWithoutManagesInput
  team: PersonCreateManyWithoutTeamInput
}

input ProjectCreateWithoutTeamInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProjectsInput!
  status: Boolean
  sectionLead: PersonCreateOneWithoutSlInput
  teamLead: PersonCreateOneWithoutTlInput
  projectManagers: PersonCreateManyWithoutManagesInput
}

input ProjectCreateWithoutTeamLeadInput {
  id: ID
  name: String!
  product: ProductCreateOneWithoutProjectsInput!
  status: Boolean
  sectionLead: PersonCreateOneWithoutSlInput
  projectManagers: PersonCreateManyWithoutManagesInput
  team: PersonCreateManyWithoutTeamInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  name: String!
  status: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  status: Boolean
  status_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProjectsInput
  status: Boolean
  sectionLead: PersonUpdateOneWithoutSlInput
  teamLead: PersonUpdateOneWithoutTlInput
  projectManagers: PersonUpdateManyWithoutManagesInput
  team: PersonUpdateManyWithoutTeamInput
}

input ProjectUpdateManyDataInput {
  name: String
  status: Boolean
}

input ProjectUpdateManyMutationInput {
  name: String
  status: Boolean
}

input ProjectUpdateManyWithoutProductInput {
  create: [ProjectCreateWithoutProductInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutProductInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutProductInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithoutProjectManagersInput {
  create: [ProjectCreateWithoutProjectManagersInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutProjectManagersInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutProjectManagersInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithoutSectionLeadInput {
  create: [ProjectCreateWithoutSectionLeadInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  set: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutSectionLeadInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutSectionLeadInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneWithoutTeamInput {
  create: ProjectCreateWithoutTeamInput
  update: ProjectUpdateWithoutTeamDataInput
  upsert: ProjectUpsertWithoutTeamInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateOneWithoutTeamLeadInput {
  create: ProjectCreateWithoutTeamLeadInput
  update: ProjectUpdateWithoutTeamLeadDataInput
  upsert: ProjectUpsertWithoutTeamLeadInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutProductDataInput {
  name: String
  status: Boolean
  sectionLead: PersonUpdateOneWithoutSlInput
  teamLead: PersonUpdateOneWithoutTlInput
  projectManagers: PersonUpdateManyWithoutManagesInput
  team: PersonUpdateManyWithoutTeamInput
}

input ProjectUpdateWithoutProjectManagersDataInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProjectsInput
  status: Boolean
  sectionLead: PersonUpdateOneWithoutSlInput
  teamLead: PersonUpdateOneWithoutTlInput
  team: PersonUpdateManyWithoutTeamInput
}

input ProjectUpdateWithoutSectionLeadDataInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProjectsInput
  status: Boolean
  teamLead: PersonUpdateOneWithoutTlInput
  projectManagers: PersonUpdateManyWithoutManagesInput
  team: PersonUpdateManyWithoutTeamInput
}

input ProjectUpdateWithoutTeamDataInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProjectsInput
  status: Boolean
  sectionLead: PersonUpdateOneWithoutSlInput
  teamLead: PersonUpdateOneWithoutTlInput
  projectManagers: PersonUpdateManyWithoutManagesInput
}

input ProjectUpdateWithoutTeamLeadDataInput {
  name: String
  product: ProductUpdateOneRequiredWithoutProjectsInput
  status: Boolean
  sectionLead: PersonUpdateOneWithoutSlInput
  projectManagers: PersonUpdateManyWithoutManagesInput
  team: PersonUpdateManyWithoutTeamInput
}

input ProjectUpdateWithWhereUniqueWithoutProductInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutProductDataInput!
}

input ProjectUpdateWithWhereUniqueWithoutProjectManagersInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutProjectManagersDataInput!
}

input ProjectUpdateWithWhereUniqueWithoutSectionLeadInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutSectionLeadDataInput!
}

input ProjectUpsertWithoutTeamInput {
  update: ProjectUpdateWithoutTeamDataInput!
  create: ProjectCreateWithoutTeamInput!
}

input ProjectUpsertWithoutTeamLeadInput {
  update: ProjectUpdateWithoutTeamLeadDataInput!
  create: ProjectCreateWithoutTeamLeadInput!
}

input ProjectUpsertWithWhereUniqueWithoutProductInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutProductDataInput!
  create: ProjectCreateWithoutProductInput!
}

input ProjectUpsertWithWhereUniqueWithoutProjectManagersInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutProjectManagersDataInput!
  create: ProjectCreateWithoutProjectManagersInput!
}

input ProjectUpsertWithWhereUniqueWithoutSectionLeadInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutSectionLeadDataInput!
  create: ProjectCreateWithoutSectionLeadInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  product: ProductWhereInput
  status: Boolean
  status_not: Boolean
  sectionLead: PersonWhereInput
  teamLead: PersonWhereInput
  projectManagers_every: PersonWhereInput
  projectManagers_some: PersonWhereInput
  projectManagers_none: PersonWhereInput
  team_every: PersonWhereInput
  team_some: PersonWhereInput
  team_none: PersonWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  person(where: PersonWhereUniqueInput!): Person
  persons(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Person]!
  personsConnection(where: PersonWhereInput, orderBy: PersonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PersonConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  program(where: ProgramWhereUniqueInput!): Program
  programs(where: ProgramWhereInput, orderBy: ProgramOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Program]!
  programsConnection(where: ProgramWhereInput, orderBy: ProgramOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProgramConnection!
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  node(id: ID!): Node
}

enum Role {
  SL
  TL
  WEB
  DS
  UX
  PM
}

type Subscription {
  person(where: PersonSubscriptionWhereInput): PersonSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  program(where: ProgramSubscriptionWhereInput): ProgramSubscriptionPayload
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
}
`
      }
    