import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requited: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    slug: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: false },
    countInStock: { type: Number, required: false, default: 0 },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
