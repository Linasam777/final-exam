import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const participantsSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 55,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
        type: ObjectId,
        ref: "Category",
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
      },
     age: {
        type: Number,
        trim: true,
        required: true,
      },
      date_of_birth: {
        type: Number,
        trim: true,
        required: true,
      },
      
});

export default mongoose.model("Participants", participantsSchema);
