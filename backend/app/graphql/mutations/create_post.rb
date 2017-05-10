Mutations::CreatePost = GraphQL::Relay::Mutation.define do
  name "CreatePost"
  # TODO: define return fields
  return_field :post, Types::PostType
  # return_field :post, Types::PostType

  # TODO: define arguments
  # input_field :name, !types.String
  input_field :title, !types.String

  resolve ->(obj, args, ctx) {
    # TODO: define resolve function
    post = Post.create(title: args[:title])
    { post: post }
  }
end
