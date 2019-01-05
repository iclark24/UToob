class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :user, foreign_key: true
      t.string :title
      t.string :body
      t.integer :likes
      t.integer :dislikes
      t.belongs_to :video, foreign_key: true

      t.timestamps
    end
  end
end
