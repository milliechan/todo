Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  field :createPost, field: Mutations::CreatePost.field
end
