class Fmis::Record
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :date, type: Time
  field :amount, type: Float
  field :author_id, type: String
end
