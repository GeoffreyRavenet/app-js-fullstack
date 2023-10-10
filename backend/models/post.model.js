const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("post", postSchema)
