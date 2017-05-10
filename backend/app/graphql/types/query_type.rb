Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :post do
    type Types::PostType
    argument :id, !types.ID
    description "Find a todo by ID"
    resolve ->(obj, args, ctx) { Post.find(args[:id]) }
  end

  field :posts do
    type types[Types::PostType]
    argument :title, !types.String
    resolve ->(obj, args, ctx) do
      if args[:title].present?
        return Post.where(title: args[:title])
      end
      Post.all
    end
  end

  # connection :posts do
  #   type Types::PostType.connection_type
  #   resolve ->(obj, args, ctx) { Post.all }
  # end

  # TODO: remove me
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end
end
