class Study::Task
  include Mongoid::Document
  field :title, type: String
  field :important, type: Integer
end
